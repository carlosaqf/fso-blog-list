const dummy = blogs => {
    return 1
}

const totalLikes = blogs => {
    const reducer = (sum, blog) => {
        return sum + blog.likes
    }

    return blogs.length === 0
        ? 0
        : blogs.reduce(reducer, 0)
}

const favoriteBlog = blogs => {
    let mostLikes = 0
    let mostLiked = {}
    blogs.forEach(blog => {
        if (blog.likes > mostLikes){
            mostLikes = blog.likes
            mostLiked = blog
        }
    })
    return mostLiked
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}