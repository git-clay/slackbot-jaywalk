'use strict'

const express = require('express'),
      app     = express()

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
