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
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: true,
      highlight: function (code, lang) {
        return hljs.highlight(lang, code).value
      }
    })
    
    // Create syntax-highlighting alias 'shell' for 'bash'
    var bash = hljs.getLanguage('bash')
    hljs.registerLanguage('shell', function (highlight) {
      return bash
    })
    
    // Easier than changing Slate's js
    marked.defaults.langPrefix = 'highlight '
    
    Handlebars.registerHelper('str', function (item) {
      return '"' + item + '"'
    })
    
    Handlebars.registerHelper('html', function (content) {
      return new Handlebars.SafeString(content)
    })
  create_docs()
})

function create_docs() {

  var build = function(data, content) {
    console.log(data)
    $.get('layouts/layout.html', function(source) {
      console.log('asd')
      if (data.includes) {
        var includes = ''
        for (var i = 0; i < data.includes.length; i++) {
          var include = data.includes[i]
          includes += '\n' + '{{> ' + include + ' }}'
        }
        source = source.replace(/{{{html content}}}/g, '{{{html content}}}' + includes)
      }
      
      var template = Handlebars.compile(source)
      console.log(content)
      data['content'] = marked(content.slice(2).join(''))
      console.log(template(data))
      $('body').html(template(data))
      // document.open();
      // document.write(template(data));;
      // document.close();
    })
  }


  $.get('slate.md', function(content) {
    content = content.split(/---/g)

    if (content.length === 1) {
      throw new Error('No markdown page settings found!')
    }

    var data = {}
    var tokens = new marked.Lexer().lex(content[1])
    console.log(tokens)
    var token
    var listName

    for (var idx = 0; idx < tokens.length; idx++) {
      token = tokens[idx]
      console.log(token)
      if (token.type === 'list_item_start') {
        token = tokens[idx + 1].text
        console.log(listName)
        if (listName === 'language_tabs') {
          console.log(token)
          var lang = token
          var langSplit = lang.split(':')
          if (langSplit.length === 1) token = {name: langSplit[0], text: langSplit[0]}
          if (langSplit.length === 2) token = {name: langSplit[0], text: langSplit[1]}
        }
        data[listName].push(token)
        idx += 2
      }

      if (token.type === 'paragraph') {
        if (tokens[idx + 1] !== undefined && tokens[idx + 1].type === 'list_start') {
          listName = token.text.slice(0, -1)
          data[listName] = []
        } else {
          token = token.text.split(': ')
          data[token[0]] = token[1]
        }
      }
    }
      console.log('asdasdsasd')

      if (data.includes) {
        // create partials
        var partials_built = 0;
        for (var i = 0; i < data.includes.length; i++) {
          var includeFileName = data.includes[i]
          console.log('asdasdasd')
          var includeFilePath = 'includes/' + includeFileName + '.md'
          $.get(includeFilePath, function(content) {
            
            var markedInclude = marked(content)
            Handlebars.registerPartial(includeFileName, markedInclude)
            partials_built++
            if (partials_built == data.includes.length) {
              build(data, content)
            }
          })
        }
      } else {
        build(data, content)
      }
  })
} 

