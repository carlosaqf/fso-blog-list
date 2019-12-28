// CONTAINS ALL ROUTES FOR BLOGS
const blogRouter = require('express').Router()
const Blog = require('../models/blog')

// GET ALL BLOGS ROUTE
blogRouter.get('/', (req,res) => {
    Blog
        .find({})
        .then(blogs => {
            res.json(blogs)
        })
})

// POST BLOG ROUTE
blogRouter.post('/', async (req,res,next) => {

    const body = req.body

    const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes
    })

    try{
        const savedBlog = await blog.save()
        res.json(savedBlog.toJSON())
    }catch(exception){
        next(exception)
    }
})

// DELETE A SINGLE BLOG
blogRouter.delete('/:id', async (req,res,next) => {
    try{
        const blog = await Blog.findByIdAndRemove(req.params.id)
        res.status(204).end()
    }catch(exception){
        next(exception)
    }
})

// UPDATE A SINGLE BLOG
blogRouter.put('/:id', async (req,res,next) => {
    
    const body = req.body

    const blog = {
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes
    }
    
    try{
        const newBlog = await Blog.findByIdAndUpdate(req.params.id, blog, { new: true })
        res.json(newBlog.toJSON())
    }catch(exception){
        next(exception)
    }
})

module.exports = blogRouter