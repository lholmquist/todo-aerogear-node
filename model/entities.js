
/** Entities used by the project */

var ron = require('ron');

/** Open a connection with redis */
client = ron({
	port: 6379,
	host: '127.0.0.1',
	name: 'client'
});


exports.Project = function () {
	var Project = client.get('Project');
	Project.property('id', {identifier: true});
	Project.property('title', {unique: true});
	Project.property('style', {});
	Project.property('tasks', {});
	return Project;
}

exports.Tag = function () {
	var Tag = client.get('Tag');
	Tag.property('id', {identifier: true});
	Tag.property('title', {unique: true});
	Tag.property('style', {});
	Tag.property('tasks', {});
	return Tag;
}

exports.Task = function () {
	var Task = client.get('Task');
	Task.property('id', {identifier: true});
	Task.property('title', {unique: true});
Task.property('description', {});
	Task.property('date', {});
	Task.property('tags', {});
	Task.property('project', {});
	return Task;
}
