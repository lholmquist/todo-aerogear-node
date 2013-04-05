
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , project = require('./routes/project')
  , tag = require('./routes/tag')
  , task = require('./routes/task')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.post('/projects', project.create);
app.put('/projects/:id', project.update);
app.get('/projects', project.findAll);
app.get('/projects/:id', project.findById);
app.delete('/projects/:id', project.deleteById);

app.post('/tags', tag.create);
app.put('/tags/:id', tag.update);
app.get('/tags', tag.findAll);
app.get('/tags/:id', tag.findById);
app.delete('/tags/:id', tag.deleteById);

app.post('/tasks', task.create);
app.put('/tasks/:id', task.update);
app.get('/tasks', task.findAll);
app.get('/tasks/:id', task.findById);
app.delete('/tasks/:id', task.deleteById);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
