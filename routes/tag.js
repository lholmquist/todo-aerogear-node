/*
 * Tag resources
 */
var entities = require('../model/entities')

/** 
 *
 * curl -v -H "Accept: application/json" -H "Content-type: application/json" -X POST
 * -d '{"title":"rock","style":"style1","tasks":[]}' http://localhost:3000/tags/
 *
 */
exports.create = function(req, res) {
    Tag = new entities.Tag();
    Tag.create(req.body,

    function(error, tag) {
        if (!error) {
            console.log("Record: " + tag.id + " created");
            return res.send(tag);
        } else {
            return console.log(error);
        }
    });
};

/** 
 *
 * curl -v -H "Content-type: application/json" -X GET http://localhost:3000/tags/1
 *
 */
exports.findById = function(req, res) {
    Tag = new entities.Tag();
    Tag.get(req.params.id,

    function(error, tag) {
        if (!error) {
            console.log("Record: " + tag.id + " found");
            return res.send(tag);
        } else {
            return console.log(error);
        }
    });
};

/**  
 *
 * curl -v -H "Content-type: application/json" -X GET http://localhost:3000/tags
 *
 */
exports.findAll = function(req, res) {
    Tag = new entities.Tag();
    return Tag.all(function(error, tags) {
        if (!error) {
            return res.send(tags);
        } else {
            return console.log(error);
        }
    });
};

/**
 *
 * curl -v -H "Content-type: application/json" -X PUT -d '{"title":"hello world"}' http://localhost:3000/tags/1
 *
 */
exports.update = function(req, res) {
    Tag = new entities.Tag();
    Tag.update({
        id: req.params.id,
        title: req.body.title,
        style: req.body.style,
        tasks: req.body.tasks
    }, function(error, tag) {
        if (!error) {
            console.log("Record: " + tag.id + " updated");
            return res.send(tag);
        } else {
            return console.log(error);
        }
    });
};

/**
 *
 * curl -v -H "Content-type: application/json" -X DELETE http://localhost:3000/tags/1
 *
 */
exports.deleteById = function(req, res) {
    Tag = new entities.Tag();
    Tag.remove(req.params.id,

    function(error, tag) {
        if (!error) {
            console.log("Record: " + req.params.id + " deleted");
            return res.send(tag);
        } else {
            return console.log(error);
        }
    });
};
