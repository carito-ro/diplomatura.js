import express from 'express';
import fetch from 'node-fetch';
var postApi = express.Router();

postApi.get('/', function (req, res) {
  Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users'),
    fetch('https://jsonplaceholder.typicode.com/posts'),
  ]).then(function (respuestas) {
    return Promise.all(respuestas.map((respuestas) => respuestas.json()))
  })
    .then(data => {
      let users = data[0];
      let posts = data[1];
      posts.map(element => {
        element.user = users.find(u => u.id === element.userId);
      });
      res.send(posts);
    })
});

postApi.get('/:id', function (req, res) {
  Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts'),
    fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}/comments`),
  ]).then(function (respuestas) {
    return Promise.all(respuestas.map((respuestas) => respuestas.json()))
  })
    .then(data => {
      let posts = data[0];
      let comments = data[1];
      let post = posts.find(element => {
        if (parseInt(req.params.id) === parseInt(element.id)) {
          element.comments = comments.filter(comentario => {
            if (comentario.postId === element.id) {
              delete comentario.postId;
              return comentario
            }
          });
          return element;
        }
      });
      post ? res.send(post) : res.send(`Post ${req.params.id} => Indefinido`);
    })
  // res.send(`Hola post ${req.params.id}.` +  );
});

export default postApi;
