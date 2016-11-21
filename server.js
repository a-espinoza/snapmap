var express     = require("express")
var app         = express()
var bodyParser  = require("body-parser")
var morgan      = require("morgan")
var mongoose    = require("mongoose")
var passport    = require("passport")
var config      = require("./config/database") //get db config file
var User        = require("./app/models/user") //get user model
var passport    = process.env.PORT || 4000
var jwt         = require("jwt-simple")

//get request params
app.use(bodyParser.urlencoded({ extneded: false }))
app.use(bodyParser.json())

// log to console
app.use(morgan("dev"))

// use passport in application
app.use(passport.initialize())

// demo Route (GET http://localhost:4000)
app.get("/", (req, res) => {
  res.send("Hello! The API is at http://localhost:" + port + "/api")
})

//Start the server
app.listen(port)
console.log("malaka @ http://localhost" + port)
