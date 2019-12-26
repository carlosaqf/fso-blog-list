// App.js creates application

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const blogRouter = require('./controllers/blogs')
const mongoose = require('mongoose')

const mongoUrl = `mongodb+srv://fullstack:horsebutt123@cluster0-hm0pj.mongodb.net/blog-list?retryWrites=true&w=majority`

mongoose.connect(mongoUrl, { useNewUrlParser: true })
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch(error => {
        console.log('error connecting to MongoDB', error.message)
    })

app.use(cors())
app.use(bodyParser.json())

app.use('/api/blogs', blogRouter)

module.exports = app
