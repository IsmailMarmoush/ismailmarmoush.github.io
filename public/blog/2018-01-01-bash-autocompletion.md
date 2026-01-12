
Using Bash scripts instead of Makefiles often means defining multiple internal functions.

For example:

```bash
#!/bin/bash
hello(){
 echo hello $1
}
$@
```

To invoke `hello`, you’d run:

```bash
./main.sh hello blabla
```
But remembering all function names can be tedious—unlike Makefiles, there’s no built-in tab completion.

## Solution

To make Bash functions and arguments auto-completable, **Append this function to your `.bashrc`:**

```bash
completion(){
    file_name=$1
    functions=$(cat $file_name | grep "^source" | sed -e 's/^source //g' | xargs echo $file_name | xargs cat | grep -o '^.*()' | tr -d '()')
 if [[ $1 == $3 ]] ; then
     local cur
     COMPREPLY=()
     cur="${COMP_WORDS[COMP_CWORD]}"
     COMPREPLY=($(compgen -W "${functions}" $cur))
 else
     prefix="#Example:"
     files=$(cat $file_name | grep "^source" | sed -e 's/^source //g' | xargs echo $file_name | xargs cat )
     cmd=$(echo "$files" | grep "^$prefix\s*$3" | sed -e "s/$prefix//" -e "s/$3//" -e "s/^\s*//" )
     local cur
     COMPREPLY=()
     cur="${COMP_WORDS[COMP_CWORD]}"
     if [[ " $(echo $functions) " == *" $3 "* ]]; then
         COMPREPLY=($(compgen -W "${cmd}" $cur))
     fi
 fi
}

complete -F completion ./main.sh
```

> *Disclaimer: After exploring alternatives, I found no simple way to add autocompletion to plain Bash scripts—so I improved an old one*

You can also annotate your functions with example comments:

```bash
#!/bin/bash
#Example:hello world
hello(){
 echo hello $1
}

#Example: bye everyone
#Example:bye all koool
bye(){
  echo bye $1
}
$@
```

## Result

```bash
./main.sh [TAB]
hello bye kool

./main.sh hel[TAB]
hello

./main.sh bye [TAB]
everyone all kool
```

## Final Notes

* Function names are detected automatically.
* Arguments are pulled from comments like `#Example:`.
* Change the prefix if needed (e.g., to `#Usage:` or `#Hint:`).

This gives you near-Makefile UX—without having to write a Makefile.
