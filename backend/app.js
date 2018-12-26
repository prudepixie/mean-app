const express = require('express');
const bodyParser = require('body-parser');
const Post = require('');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
  console.log('first middleware');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  )
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  res.status(201).json({
    message: 'Post added sucessfully'
  });
});

app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: '43215vgfd', 
      title: 'First post', 
      content: 'Coming form server'
    },
    {
      id: '4312352ggr', 
      title: 'Second post', 
      content: 'Coming form server'
    }
  ];
  res.status(200).json({
    message: 'posts fetched succesfully',
    posts
  });
});

module.exports = app;