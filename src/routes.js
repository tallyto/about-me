const {Router } = require('express')
const path = require('path')
const routes = Router()

routes.get("/", (req, res)=> {
  res.sendFile(path.join(__dirname,'public/index.html'))
})

routes.get("/projetos", (req, res)=> {
  res.sendFile(path.join(__dirname,'public/projetos.html'))
})

module.exports = routes