[Slate](https://github.com/tripit/slate) with no build step
========
A pure browser port of the documentation generator Slate.  All you have to do is clone the repo and replace the markdown.  You will not be able to view the documentation until deploying it to a server.
[See it](https://jmanek.github.io/slate_clone) in action!

This is a fork of my [node.js port](https://github.com/jmanek/slate_node/) with all the javascript compliant with the browser. There is now no need to have node.js installed on the machine. This way you don't have to worry about incorpoting Slate into your current build process or creating an entirely new toolchain for it. It is a completely "static" version of Slate.  This is inherently slower than normal, pre-built versions, but it is completely independent of operating system or platform.

 
### Running

1. Clone the repo
2. Deploy it to a local or remote host. e.g. `python3 -m http.server` or Github Pages
3. `slate.md` is read by `slate.js` through `index.html` at runtime

### Code Highlighting
Numerous themes for highlight.js are available in `stylesheets/highlight`. You can switch between them by changing `index.html`
```html
<link href="stylesheets/highlight/solarized-dark.css" rel="stylesheet" type="text/css" />
```


WIP
