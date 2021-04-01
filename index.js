
var express = require('express');
var expressHbs = require('express-handlebars');
var app = express();

app.listen(process.env.PORT || '3000');



app.engine('handlebars', expressHbs({
    layoutsDir: __dirname + '/views/layouts',
    // layout cha mặc định
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/', function (request,
                       response) {
var name = 'VICUONG';
var arr =['A','B','C'];
    response.render('home',{
        title :name,date:'7-5-2001',array:arr
    });
});

app.get('/login', function (request, response) {
});