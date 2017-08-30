var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    
    'article-one': {
        title: 'Article one | Ravi singh',
        heading: 'Article one',
        date: 'sep 5,2017',
        content:
                 `   <p>
                        This the content for my first article. In which i hv study aboud html and css
                        and doing the assignment related to this.This the content for my first article. 
                        
                        In which i hv study aboud html and css and doing the assignment related to this.
                        This the content for my first article. In which i hv study aboud html and css and doing the assignment related to this
                     </p>
                     <p>
                        This is about learning about webapp development and how to ceate a webapp
                        And its intresting, i have created a web app same like how hasura created and learnslot of about webapp
                        i will continue this module and its quite intresting for me.
                     </p> `
    },
    'article-two': {
         title: 'Article two | Ravi singh',
        heading: 'Article two',
        date: 'sep 7,2017',
        content:
                 `   <p>
                        This the content for my second article. In which i hv study aboud html and css
                        and doing the assignment related to this.This the content for my first article. 
                        
                        In which i hv study aboud html and css and doing the assignment related to this.
                        This the content for my second article. In which i hv study aboud html and css and doing the assignment related to this
                     </p>
                      `
    },
    'article-three': {
         title: 'Article three | Ravi singh',
        heading: 'Article three',
        date: 'sep 15,2016',
        content:
                 `   <p>
                        This the content for my third article. In which i hv study aboud html and css
                        and doing the assignment related to this.This the content for my first article. 
                        
                        In which i hv study aboud html and css and doing the assignment related to this.
                        This the content for my first article. In which i hv study aboud html and css and doing the assignment related to this nd its awesome
                     </p>
                      `
    }
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
        <html>
      <head>
        <title>
          ${title}
          </title>
           <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
         
          </head>
          <body>
              <div class="container">
            <div>
              <a href="/">home</a>
              </div>
              <hr/>
              <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                 </div>
                 <div>
                     ${content}
                 </div>
                  </div>
            </body>
                   

</html>
`
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    //articleNae == article-one
    // articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
