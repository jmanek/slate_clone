[Slate](https://github.com/tripit/slate) with no build step
========

A port of the documentation generator Slate to require no building.  All you have to do is clone the repo and replace the markdown.  You will not be able to view the documentation until deploying it to a server.
[See it](http://jmanek.github.io/slate_clone/) in action!

This is mostly a fork of my [node.js port](http://jmanek.github.io/slate_node/), but I have made the javascript compliant with the browser. There is now no need to have node.js installed on the machine. This way you don't have to worry about incorpoting Slate into your current build process or create an entirely new toolchain for it. It is a completely "static" version of Slate.

 
### Running

1. Clone the repo
2. Deploy it to a local or remote host
3. `slate.md` is read by `slate.js` through `index.html` at runtime

It is not running correctly with Github Pages right now. Working properly with `python3 -m http.server`. 
