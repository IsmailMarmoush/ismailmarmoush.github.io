Have you wondered how to safely propagate errors and exceptions including the ones that are unknown (aka being
Reactively **Resilient** )  from the very bottom layer of Repositories and DAOs up to the API ?

I wanted to address an issue that has always bugged me out, and I'm sure many when encountering such paradigm shift.
With trial and error I have reached a seemingly satisfying state.

Requirements:
Basic knowledge of VAVR, Reactor, Reactor Netty.

## Basic wrapping of throws

Java is crazy with throwing Throwables right ? VAVR has cool feature from Scala (Try) which is basically an Either<
Throwable, T>.

For any function **op** that throws an error you would basically wrap it into `Try.of(()-> op())` and I'll tell you why
you'd need that later.

## Repo/DAO Layer

```java
public interface UserRepo {
  Mono<Try<UserEntity>> create(User user);
}

public class CreationError extends Throwable {}

public class AlreadyExists extends CreationError {}

public interface TwitterRepo {
  Mono<Try<Tweet>> get(String id);
}

public class ServiceUnavailable extends Throwable {}

```

## Service Layer

```java
public interface UserService {
  Mono<Try<UserRespDto>> create(UserReqDto udto);

  Mono<Void> deleteResource(ResourceReqDto rdto);
}
```

## Utilities Layer

```java
public static NettyOutbound send(HttpServerResponse resp,int status,String s,HttpHeaders headers){
        return resp.status(status).headers(headers).sendString(Mono.just(s));
        }

public static NettyOutbound sendError(HttpServerResponse resp,NettyHttpError nhe){
        HttpHeaders header=nhe.httpHeaders.isDefined()?nhe.httpHeaders.get():EmptyHttpHeaders.INSTANCE;
        return resp.status(nhe.statusCode)
        .headers(resp.responseHeaders().add(header))
        .sendString(Mono.just(nhe.message.getOrElse("Error")));
        }
        ...
/* In the `adapt` method you would map all possible 
errors to their preferred answers, plus the last one which maps any other to a 500

And of course you would definitely add normal Java exception classes if needed.
*/
public NettyHttpError adapt(Throwable t){
        return Match(t).of(Case($(instanceOf(ServiceUnavailable.class)),()->new NettyHttpError(401,t)),
        Case($(instanceOf(AlreadyExists.class)),()->new NettyHttpError(400,t)),
        Case($(),()->new NettyHttpError(500,t)));
        }
```

## API Layer

```java
public class UserController {
  // nhea.adapt(..) would return a NettyHttpError that maps t:Throwable to proper status code,headers, and messages
  private NettyHttpErrorAdapter nhea;
 ...

  public NettyOutbound createUser(HttpServerRequest req, HttpServerResponse resp) {
    return req.receive().aggregate().asString().map(c -> json.toObject(c, UserReqDto.class)) // Mono<Try<UserReqDto>>
              .flatMap(tryToMonoTry(UserService::create)) // Mono<Try<UserRespDto>>
              .flatMap(tryToMonoVoid(st -> send(resp, 201, st), // happy path
                                     t -> sendError(resp, nhea.adapt(t))); // sad path
  }
}
```

With that you would propagate all errors that might happen to the last layer (a REST API in the previous case) other
case would be to send an event or a message to a message bus, would almost be same way.

* If you keep all code that most possibly throws exceptions handled through `Try.of()` any exception would be handled
  and wouldn't blow in the application.
* In case anything blows, Reactor has error() signal in its Mono and Flux, and Reactor Netty would deal with those as
  Internal error and convert them into a `500` .

Stay tuned for previous shortcuts and utility methods are being put in [github/jutils](https://github.com/ismailmarmoush/jutils) one by one. Feel free to star or follow, and PRs are very welcome.
