const Router = require('express').Router()
const folders = require('./folderRouter')
const users = require('./userRouter')
const notes = require('./noteRouter')
const github = require('./githubRouter')

Router.use('/folders', folders)
Router.use('/users', users)
Router.use('/notes', notes)
Router.use('/github', github)

module.exports = Router
