/*
 * Project resources
 */
var entities = require('../model/entities')

/** 
 *
 * curl -v -H "Accept: application/json" -H "Content-type: application/json" -X POST
 * -d '{"title":"Air Drummer","style":"Rock","tasks":[]}' http://localhost:3000/projects/
 *
 */
exports.create = function(req, res) {
    Project = new entities.Project();
    Project.create(req.body,

    function(error, project) {
        if (!error) {
            console.log("Record: " + project.id + " created");
            return res.send(project);
        } else {
            return console.log(error);
        }
    });
};

/** 
 *
 * curl -v -H "Content-type: application/json" -X GET http://localhost:3000/projects/1
 *
 */
exports.findById = function(req, res) {
    Project = new entities.Project();
    Project.get(req.params.id,

    function(error, project) {
        if (!error) {
            console.log("Record: " + project.id + " found");
            return res.send(project);
        } else {
            return console.log(error);
        }
    });
};

/**  
 *
 * curl -v -H "Content-type: application/json" -X GET http://localhost:3000/projects
 *
 */
exports.findAll = function(req, res) {
    Project = new entities.Project();
    return Project.all(function(error, projects) {
        if (!error) {
            return res.send(projects);
        } else {
            return console.log(error);
        }
    });
};

/**
 *
 * curl -v -H "Content-type: application/json" -X PUT -d '{"title":"Bass player"}' http://localhost:3000/projects/1
 *
 */
exports.update = function(req, res) {
    Project = new entities.Project();
    Project.update({
        id: req.params.id,
        title: req.body.title,
        style: req.body.style,
        tasks: req.body.tasks
    }, function(error, project) {
        if (!error) {
            console.log("Record: " + project.id + " updated");
            return res.send(project);
        } else {
            return console.log(error);
        }
    });
};

/**
 *
 * curl -v -H "Content-type: application/json" -X DELETE http://localhost:3000/projects/1
 *
 */
exports.deleteById = function(req, res) {
    Project = new entities.Project();
    Project.remove(req.params.id,

    function(error, project) {
        if (!error) {
            console.log("Record: " + req.params.id + " deleted");
            return res.send(project);
        } else {
            return console.log(error);
        }
    });
};
