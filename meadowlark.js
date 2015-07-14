var express = require('express');
var fortune = require('./lib/fortune.js');
var formidable = require('formidable');
var app = express();


var handlebars = require('express3-handlebars').create({
        defaultLayout:'main',
        helpers:{
            section:function(name,options){
                if(!this._sections) this._sections={};
                this._sections[name]=options.fn(this);
                return null;
            }
        }
    });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3001);

app.use(express.static(__dirname + '/public'));

app.use(require('body-parser')());

function getWeatherData(){
    return {
        locations: [
            {
                name: 'Taipei',
                forecastUrl: 'http:localhost:3001',
                iconUrl:'http://icons-ak.wxug.com/i/c/k/sunny.gif',
                weather:'overcast',
                temp: '33.3 C'
            },
            {
                name: 'Taichung',
                forecastUrl: 'http:localhost:3001',
                iconUrl:'http://icons-ak.wxug.com/i/c/k/partlycloudy.gif',
                weather:'overcast',
                temp: '32.3 C'
            },
            {
                name: 'Pingtung',
                forecastUrl: 'http:localhost:3001',
                iconUrl:'http://icons-ak.wxug.com/i/c/k/rain.gif',
                weather:'overcast',
                temp: '30.3 C'
            }
        ]
    }
}

app.use(function(req,res,next){
    if(!res.locals.partials) res.locals.partials={};
    res.locals.partials.weather = getWeatherData();
    next();
});

app.use(function(req,res,next){
    res.locals.showTests = app.get('env') !== 'production' && req.query.test ==='1';
    next();
});

app.get('/', function(req, res){
    res.render('home');
});

//app.get('/headers',function(req,res){
//    res.set('Content-type','text/plain');
//    var s = '';
//    for(var name in req.headers) s+=name + req.headers[name] + '\n';
//    res.send(s);
//});

//app.disable('x-powered-by');


app.get('/about', function(req,res){
    res.render('about', {
        fortune: fortune.getFortune(),
        pageTestScript: '/qa/tests-about.js'
    } );
});

app.get('/tours/hood-river',function(req,res){
    res.render('tours/hood-river');
});
app.get('/tours/oregon-coast', function(req, res){
    res.render('tours/oregon-coast');
});
app.get('/tours/request-group-rate',function(req,res){
    res.render('tours/request-group-rate');
});
app.get('/jquery-test', function(req, res){
    res.render('jquery-test');
});

// ch07 handelbars layout
app.get('/nursery-rhyme', function(req, res){
    res.render('nursery-rhyme');
});
app.get('/data/nursery-rhyme', function(req, res){
    res.json({
        animal: 'squirrel',
        bodyPart: 'tail',
        adjective: 'bushy',
        noun: 'heck'
    });
});

// ch08 form
app.get('/newsletter',function(req,res){
    res.render('newsletter',{csrf:'CSRF token goes here'});
});
app.post('/process',function(req,res){
    //------- 8.1 ---------
    //console.log('query:'+req.query.form);
    //console.log('CSRF :'+req.body._csrf);
    //console.log('Name :'+req.body.name);
    //console.log('Email:'+req.body.email);
    //res.redirect(303,'/thank-you');

    //------- 8.2 Ajax---------
    if(req.xhr || req.accepts('json,html')==='json'){
        // if there were an error, we would send { error: 'error description' }
        res.send({ success: true });
    } else {
        // if there were an error, we would redirect to an error page
        res.redirect(303, '/thank-you');
    }
});

app.get('/contest/vacation-photo',function(req,res){
   var now = new Date();
    res.render('contest/vacation-photo',{year:now.toJSON()});
});
app.post('/contest/vacation-photo/:year/:month',function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields,files){
        if(err) return res.redirect(303, '/');
        console.log('fileds: '+fields);
        console.log('files:  '+files);
        res.redirect(303,'/thank-you');
    });
});

// custom 404 page
app.use(function(req, res){
    res.status(404);
    res.render('404');
});
// custom 500 page
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});
app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
    app.get('port'));
});

if(app.thing==null) console.log('');