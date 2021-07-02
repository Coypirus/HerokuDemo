
const express = require('express')
const path = require('path')
const app = new express()
const ejs = require('ejs')
const mongoose = require('mongoose')

const BlogPost = require('./models/BlogPost.js')


mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true})

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.set('view engine', 'ejs')

app.listen(4000, ()=> {
    console.log('App listening on port 4000')
})
app.get('/', (req, res)=> {
    res.render('index')
})
app.get('/about', (req, res)=> {
    res.render('about')
})
app.get('/post', (req, res)=>{
    res.render('post')
})
app.get('/contact', (req, res)=>{
    res.render('contact')
})
app.get('/posts/new', (req, res)=>{
    res.render('create')
})
app.post('/posts/store', async (req, res)=>{
    await BlogPost.create(req.body)
    res.redirect('/')
})