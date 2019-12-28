const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('get all blogs', async () => {
    const results = await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    
    expect(results.body.length).toBe(1)
})


afterAll(() => {
    mongoose.connection.close()
})