
The following was my answer to this question "[Recommended Eclipse plugins to generate UML from Java code](http://stackoverflow.com/questions/51786/recommended-eclipse-plugins-to-generate-uml-from-java-code/10966290#10966290)"
over stackoverflow the question was closed (opinion based) then deleted.

So here is it:

### Update July 10th 2014 Using eclipse-modeling luna

Updates are in bold, and pictures have changes, if you found any problems viewing the pictures let me know, I changed
them to another host (google), photobucket was too much ads and awful control panel view for me.

**Disclaimer**
I'm not an expert in Papyrus nor Modisco, I collected this tutorial from an old page in papyrus as far as I remember,
then started adding to it by using the tool, so I advice you to read the manuals and come up with a better
understanding.

IMHO I find papyrus and modisco are of high level than the question actually needed, and I think in 2014 there are
simpler tools available (haven't got the time to check yet)S

**EDIT:** If you're a designer then Papyrus is your best choice it's very advanced and full of features, but if you just
want to sketch out some uml diagrams and easy installation then ObjectAid is pretty cool and it doesn't require any
plugins I just installed it over Eclipse-Java EE and works great !.

### UPDATE Oct 11th 2013

My original post was in June 2012 alot of things have changed many tools has grown and others didn't. Since I'm going
back to do some modeling and also getting some replies to the post I decided to install papyrus again, and will
investigate other possible uml modeling solutions again. Uml generation (with synchronization feature) is really
important not to software designer but to the average developer.
I wish papyrus had straightforward way to Reverse Engineer classes into UML class diagram and It would be super cool if
that reverse engineering had a synchronization feature, but unfortunately papyrus project is full of features and I
think developers there have already much at hand since also many actions you do over papyrus might not give you any
response and just nothing happens but that's out of this question scope anyway.

### The Answer

Last update: July 10th 2014

**Tools**

* Downloaded Eclipse Kepler Modeling
* Help-> Install modeling components-> papyrus
* After installation finishes restart
* Again Help -> Install modeling components -> Modisco

**Steps**

1. In your java project (assume it's called MyProject) create a folder e.g UML
2. Right click over the project name -> Discovery -> Discoverer -> Discover Java and inventory model from java
   project, **Then choose true for the property serialize target**, a file called MyProject_kdm.xmi will be generated.
   ![new diagram](/images/papyrus/01.png)

3. Right click project name file --> new --> papyrus model -> and call it MyProject.
   ![new diagram](/images/papyrus/02.png)
4. Move the **all** generated files MyProject.di , MyProject.notation, MyProject.uml etc to the UML folder
5. Right click on MyProject_kdm.xmi -> Discovery -> Discoverer -> Discover UML model from KDM code again you'll get a
   property dialog set the serialization prop to TRUE to generate a file named MyProject.uml
   ![new diagram](/images/papyrus/03.png)
6. Move generated MyProject.uml which was generated at root, to UML folder, Eclipse will ask you If you wanted to
   replace it click yes. What we did in here was that we replaced an empty model with a generated one.
7. ALT+W -> show view -> papyrus -> model explorer
8. **Some people in the comments mentioned they were not able to view the root model, To be able to see it, you should
   open the file called MyProject.di, Also click on the icons as In the picture to see different views of the project**

![new diagram](/images/papyrus/04.png)

![new diagram](/images/papyrus/05.png)

9. In the view Right click root model -> New diagram
10. Then start grabbing classes to the diagram from the view

**Some features**

* To show the class elements (variables, functions etc) Right click on any class -> Filters -> show/hide contents
  Voila !! **(Didn't work with me in Luna)**
* You can have default friendly color settings from Window -> pereferences -> papyrus -> class diagram
* One very important setting is Arrange when you drop the classes they get cramped right click on any empty space at
  class diagram and click Arrange All
* Arrows in the model explorer view can be grabbed to the diagram to show generalization, realization etc
* After all of that your settings will show diagrams like
* Since Synchronization isn't available as far as I know you'll need to manually import any new classes.

That's all, And don't buy commercial products unless you really need it, papyrus is actually great and sophisticated
instead donate or something.

Disclaimer: I've no relation to the papyrus people in fact i didn't like papyrus at first until I did lots of research
and experienced it with some patience. And will get back to this post again when I try other free tools.

**End Answer**