[Slate](https://github.com/tripit/slate) with no build step
========
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

A port of the documentation generator Slate to require no building.  All you have to do is clone the repo and replace the markdown.  You will not be able to view the documentation until deploying it to a server.
[See it](http://jmanek.github.io/slate_clone/) in action!

This is mostly a fork of my [node.js port](http://jmanek.github.io/slate_node/), but I have made the javascript compliant with the browser. There is also no need to have node.js installed on the machine. This way you don't have to worry about incorpoting Slate into your current build process or create an entirely new toolchain for it. It is a completely "static" version of Slate.

The major difference is the use of [marked](https://github.com/chjj/marked) for parsing the .md, [highlight](https://highlightjs.org/) for syntax highlighting, and [Handlebars](http://handlebarsjs.com/) for templating.  

 
### Running

1. Clone the repo
2. Deploy it to a local `python3 -m http.server`, or remote host
3. `index.md` is read by `slate.js` through `index.html` at runtime
