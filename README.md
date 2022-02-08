
### Introduction

There are lots of interesting Django Tutorials. In particular the ones on
[RealPython](https://realpython.com/) are quite good. There are also plenty of
React tutorials but almost all of them use "static data". 

As a starting point to learn Django/React in early January 2022, I went looking
for a suitable tutorial which covered both React and Django and found [How to
Build a To-Do Application Using Django and
React](https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react)
in the Digital Ocean Community Tutorials area.

This little repository is to work through this tutorial.

### Conclusion

I started learning Python a couple of years ago and started learning Flask for
REST APIs. I came across Django but saw the words "Object Relational Mapper" and
was put off. Object relational mapping as a very long history, I particularly
remember CORBA. I have memories of many systems which could readily generate a
database schema from your Java or C++ code. But when it came time to make
changes to the data model there was a lot of rework to do. From a maintanence
perspective you were generally better off just writing suitable classes
yourself. This issue still exists today with code generation from Swagger files.

After being encouraged to look at Django in a job interview, I started having a
look and was VERY impressed. With the concept of migrations _most_ data model
updates are relatively straightforward. This is directly analogous to what
enterprise software tools have done in the ITSM space for more than 20 years
(Remedy, OpenView, Peregrine, ServiceNow) except that Django is built on an
industry standard open source and increasingly popular language - Python.

As for React, sure it is cool, but it will probably be superseded by yet another
Javascript framework, these seem to have a half life of about 3 years. However I
think Django's half life might be quite a bit longer. Django, you now have my
attention.

### Building and Running

After cloning the repository carry out the [acceptance test
specification](./sdlc/acceptance_tests/index.md) to see the site in action.

