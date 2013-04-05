/*
 * Task resources
 */
var entities = require('../model/entities')

/** 
 *
 * curl -v -H "Accept: application/json" -H "Content-type: application/json" -X POST
 * -d '{"title":"Air Drummer","style":"Rock","tasks":[]}' http://localhost:3000/tasks/
 *
 */
exports.create = function(req, res) {
    Task = new entities.Task();
    Task.create(req.body,

    function(error, task) {
        if (!error) {
            console.log("Record: " + task.id + " created");
            return res.send(task);
        } else {
            return console.log(error);
        }
    });
};

/** 
 *
 * curl -v -H "Content-type: application/json" -X GET http://localhost:3000/tasks/1
 *
 */
exports.findById = function(req, res) {
    Task = new entities.Task();
    Task.get(req.params.id,

    function(error, task) {
        if (!error) {
            console.log("Record: " + task.id + " found");
            return res.send(task);
        } else {
            return console.log(error);
        }
    });
};

/**  
 *
 * curl -v -H "Content-type: application/json" -X GET http://localhost:3000/tasks
 *
 */
exports.findAll = function(req, res) {
    Task = new entities.Task();
    return Task.all(function(error, tasks) {
        if (!error) {
            return res.send(tasks);
        } else {
            return console.log(error);
        }
    });
};

/**
 *
 * curl -v -H "Content-type: application/json" -X PUT -d '{"title":"Bass player"}' http://localhost:3000/tasks/1
 *
 */
exports.update = function(req, res) {
    Task = new entities.Task();
    Task.update({
        id: req.params.id,
        title: req.body.title,
        style: req.body.description,
        date: req.body.date,
        project: req.body.project,
        tags: req.body.tags
    }, function(error, task) {
        if (!error) {
            console.log("Record: " + task.id + " updated");
            return res.send(task);
        } else {
            return console.log(error);
        }
    });
};

/**
 *
 * curl -v -H "Content-type: application/json" -X DELETE http://localhost:3000/tasks/1
 *
 */
exports.deleteById = function(req, res) {
    Task = new entities.Task();
    Task.remove(req.params.id,

    function(error, task) {
        if (!error) {
            console.log("Record: " + req.params.id + " deleted");
            return res.send(task);
        } else {
            return console.log(error);
        }
    });
};
