#!/bin/sh

# Create project
curl -v -H "Accept: application/json" -H "Content-type: application/json" -X POST -d '{"title":"Air Drummer","style":"Rock","tasks":[]}' http://localhost:3000/projects/

# Create Tag

curl -v -H "Accept: application/json" -H "Content-type: application/json" -X POST -d '{"title":"rock","style":"style1","tasks":[]}' http://localhost:3000/tags/

# Create Task

curl -v -H "Accept: application/json" -H "Content-type: application/json" -X POST -d '{"title":"Air Drummer","style":"Rock","tasks":[]}' http://localhost:3000/tasks/
