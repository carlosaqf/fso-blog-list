// We define these in App.js
// const express = require('express')
// const bodyParser = require('body-parser')
// const app = express()
// const cors = require('cors')
// const blogRouter = require('./controllers/blogs')
// const mongoose = require('mongoose')

// blogSchema and model moved to /models/blog.js file
// const blogSchema = mongoose.Schema({
//     title: String,
//     author: String,
//     url: String,
//     likes: Number
// })

// const Blog = mongoose.model('Blog', blogSchema)

// We define mongoUrl and mongoose.connect in App.js
// const mongoUrl = `mongodb+srv://fullstack:horsebutt123@cluster0-hm0pj.mongodb.net/blog-list?retryWrites=true&w=majority`
// mongoose.connect(mongoUrl, { useNewUrlParser: true })
//     .then(() => {
//         console.log('connected to mongo db')
//     })
//     .catch(error => {
//         console.log('error connecting to mongo db', error.message)
//     })

// We define the app.use functions below in App.js
// app.use(cors())
// app.use(bodyParser.json())
// app.use('/api/blogs', blogRouter)

// Routes moved to /controllers/blogs.js file
// app.get('/api/blogs', (req,res) => {
//     Blog
//         .find({})
//         .then(blogs => {
//             return res.json(blogs)
//         })
// })

// app.post('/api/blogs', (req, res) => {
//     const blog = new Blog(req.body)
//     blog.save()
//         .then(result => {
//             res.status(201).json(result)
//         })
// })

const app = require('./app')
const http = require('http')

const server = http.createServer(app)
const PORT = 3003

server.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})