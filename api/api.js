const express = require('express');

const PeopleService = require('./people-service');
const peopleService = new PeopleService();
const app = express();
const v1 = express.Router();


app.use('/api/v1', v1);

v1.get('/people', (request, response) => {
    const people = peopleService.getPeople();
    response.send(people);
});

v1.post('/people/:id', (request,reponse) => {
    const id = request.params.id;
    const updatedPeople = peopleService.updatePeople(id);
    reponse.send(updatedPeople);
});


module.exports = app;
