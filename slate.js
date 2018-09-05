/*
Copyright 2018 Jesse Manek
Licensed under the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License. You may obtain
a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations
under
*/

$(document).ready(function() {

    marked.setOptions({
      highlight: function (code, lang) {
        return hljs.highlight(lang, code).value
      }
    })
    
    // Easier than changing Slate's js
    marked.defaults.langPrefix = 'highlight '
    
    // Create syntax-highlighting alias 'shell' for 'bash'
    hljs.registerLanguage('shell', function (highlight) {
      return hljs.getLanguage('bash')
    })
    
    Handlebars.registerHelper('str', function (item) {
      return '"' + item + '"'
    })
    
    Handlebars.registerHelper('html', function (content) {
      return new Handlebars.SafeString(content)
    })

  createDocs()
})

// Reads in slate.md located in the same directory.
// Uses that to populate the <body> element of index.html
// with generated documentation
function createDocs() {

  // Apply our data to the layout and render it
  var buildLayout = function(data) {
    $.get('layouts/layout.html', function(source) {
      if (data.includes) {
        var includes = ''
        for (var i = 0; i < data.includes.length; i++) {
          includes += '\n' + '{{> ' + data.includes[i] + ' }}'
        }
        source = source.replace(/{{{html content}}}/g, '{{{html content}}}' + includes)
      }
      $('body').html(Handlebars.compile(source)(data))
    })
  }

  $.get('slate.md', function(content) {
    content = content.split(/---/g)
    if (content.length === 1) throw new Error('No markdown page settings found!')

    // Parse header
    var tokens = new marked.Lexer().lex(content[1])
    var data = {content: marked(content.slice(2).join(''))}
    var listName
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]
      if (token.type === 'list_item_start') {
        token = tokens[i + 1].text
        if (listName === 'language_tabs') {
          var langSplit = token.split(':')
          if (langSplit.length === 1) token = {name: langSplit[0], text: langSplit[0]}
          if (langSplit.length === 2) token = {name: langSplit[0], text: langSplit[1]}
        }
        data[listName].push(token)
        i += 2
      }
      if (token.type === 'paragraph') {
        if (tokens[i + 1] !== undefined && tokens[i + 1].type === 'list_start') {
          listName = token.text.slice(0, -1)
          data[listName] = []
        } else {
          token = token.text.split(': ')
          data[token[0]] = token[1]
        }
      }
    }

    // Create HTML for includes
    if (data.includes) {
      var includesBuilt = 0
      var buildInclude = function(includeName) {
        return function(content) {
          Handlebars.registerPartial(includeName, marked(content))
          if (++includesBuilt === data.includes.length) buildLayout(data)
        }
      }
      for (var i = 0; i < data.includes.length; i++) {
        $.get('includes/_' + data.includes[i] + '.md', buildInclude(data.includes[i]))
      }
    } else { buildLayout(data) }
  })
} 

