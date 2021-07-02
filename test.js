const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true})

BlogPost.create({
    title:"The Mythbuster Guide to Saving Money on Energy Bills",
    body:`If you have been here a long time, you might remember when I went
    on ITV Tonight to dispense a masterclass in saving money on energy bills.
    Energy-saving is one of my favorite money topics, because once you get past
    the borign bullet-point lists, a whole new world of thrifty nerdery opens up.
    You know those bullet-points list.  You start spotting them everything at this
    time of year.  They go like this
    `
}, (error, blogpost)=>{
    console.log(error, blogpost)
})