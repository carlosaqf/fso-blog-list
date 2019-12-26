// CONTAINS ALL ROUTES FOR BLOGS
const blogRouter = require('express').Router()
const Blog = require('./../models/blog')

// GET ALL BLOGS ROUTE
blogRouter.get('/', (req,res) => {
    Blog
        .find({})
        .then(blogs => {
            res.json(blogs)
        })
})

// POST BLOG ROUTE
blogRouter.post('/', (req,res) => {
    const blog = new Blog(req.body)

    blog
        .save()
        .then(result => {
            res.status(201).json(result)
        })
})

module.exports = blogRouter