'use strict'

const express     = require('express'),
      app         = express(),
      bodyParser  = require('body-parser')

// Other js files
const slackbot    = require('./slackbot.js'),
      firebase    = require('./firebase.js'),
      geolocation = require('./geolocation.js')

app.use(bodyParser)


/*****************
Server listen
*******************/
let port = process.env.PORT || 3000
app.listen(port, (err) => {
  if (err) {
    return console.error(err)
  }

  console.log(`Listening on port ${port}`)
})
