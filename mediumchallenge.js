
/*MEDIUM: Create a JSON file that will have 10 employees in it, their employeeID, their name, their salary and department name.
Then, create an express API so that when you hit the endpoint with a GET request we want the api to respond with all data on the employees.
If you hit the endpoint with their employeeID, we want to hand up only the information on that one employee.
If you hit the endpoint with an incorrect employeeID, send back the correct HTTP status code and an error message stating that the employee was not found.
GET::myendpointname.com/employees = Json with information from all 10 employees.
GET::myendpointname.com/employees/<employeeID> = Json with the information from that specific employee. */


// ENDPOINTS:
// GET::http://localhost:3000/employees
// GET::http://localhost:3000/employees/1   (or any other employee id)
//GET::http://localhost:3000/employees/11 




// we create express variable that is requiring express api
const express = require('express');
// here we use the express function
const app = express();
// here we set our .json file with array of employees to a variable named employees
const employees = require('./mediumchallenge.json');

// using a get method for our app and the employees is our path
//so we send in two parameters reuqest and respond, and we wants a response to send our employees list
app.get('/employees', (req, res) => res.send(employees))

//same as explanation above
app.get('/employees/:EmployeeId', (req, res) => {
    /*named a variable named roster to equal our employees list
    here we want to find the specific employee id
    */
    const roster = employees.find(roster => roster.EmployeeId == req.params.EmployeeId);
    /* here if we input something into our local host that is false towards the information in our
    variable roster, then send or responde back with a 404 status which means not found error
    */
    if (!roster) return res.sendStatus(404);
    // if roster is set to true then send out everything within our const so our specific employee id we input shows up
    res.send(roster)
})


// Lastly app.listen looks out for what server to port on
//then when we run node server we get the message we put in that will console log once server is set to run
// we console.log so we can tell wther our server is ready and set ro runor not
app.listen(3000, () => console.log(`Express server currently running on port 3000`));









