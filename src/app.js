const express = require('express')
const routes = require('./routes')
const path = require("path")

class App {
  constructor(){
    this.server = express()
    this.middlewares()
    this.routes()
 
  }

  middlewares(){
    this.server.use(express.urlencoded({extended: true}))
    this.server.use(express.json())
    this.server.use("/public",express.static(__dirname+ '/public'))
  }

  routes(){
    this.server.use(routes)
  }


}

module.exports = new App().server