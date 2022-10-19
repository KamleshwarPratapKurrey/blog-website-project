const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // for servinfg static file
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views')) // set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {};
    res.status(200).render('home.pug', params);
});
app.get('/contact', (req, res)=>{
    res.status(200).render('contact_us.pug');
});
app.get('/blog', (req, res)=>{
    res.status(200).render('blog.pug');
});

// STSRT THE SERVER
app.listen(port, ()=>{
    console.log(`This application start on port ${port}`);
});