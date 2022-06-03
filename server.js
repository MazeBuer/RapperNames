const express = require('express')
const app = express()
const PORT = 8000    //instead of putting localhost:8000 we use PORT keyword. can be any number
const cors = require('cors')

app.use(cors()) //cors() is blank

/* Skeleton of CRUD 
    app.CRUD('/page', (req, res) => {
        //do something
}) */

const rappers = {
    '21 savage': {
        'age': 29,
        'birth name': 'Sheyaa Bin Abraham-Joseph',
        'birth location': 'London, England'
    },

    'chance the rapper' : {
        'age': 29,
        'birth name': 'Chancelor Bennet',
        'birth location': 'Chicago, Illinois'
    },

    'dylan' : {
        'age': 0,
        'birth name': 'Dylan',
        'birth location': 'Dylan'
    }
}


//Read requeset. We heard a request (typing in website) and we are returning html page
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

//Api page
app.get('/api/:rapperName', (request, response) => {
    const rappersName = request.params.rapperName.toLowerCase() // requsting parameters of rapperName
    if(rappers[rappersName]) { //if a rapper name [] exists in rappers 
        response.json(rappers[rappersName]) //you put in a rapper we have you will get the object returned
    }else {
        response.json(rappers['dylan']) //if you put another rapper name we dont have return object Dylan
    }

    //response.json(rappers)  //instead of sending a file we are sending json for the api
})

//Listening for a port # to be up and running in
app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The Server is running on port ${PORT}! You better go catch it`)
})

//process.env.PORT is saying use the PORT Heroku wants us to use. If that does not exsist then use the PORT we said 

