import express from 'express';
import fetch from 'node-fetch';
var albumsApi = express.Router();

albumsApi.get('/', function (req, res) {
  Promise.all([
    fetch('https://jsonplaceholder.typicode.com/albums'),
    fetch('https://jsonplaceholder.typicode.com/users'),
  ]).then(function (respuestas) {
    return Promise.all(respuestas.map((respuestas) => respuestas.json()))
  })
    .then(data => {
      let albums = data[0];
      let users = data[1];
      albums.map(element => {
        element.user = users.find(u => u.id === element.userId);
        delete element.userId;
      });
      res.send(albums);
    })
});
albumsApi.get('/:id', function (req, res) {
  Promise.all([
    fetch('https://jsonplaceholder.typicode.com/albums'),
    fetch(`https://jsonplaceholder.typicode.com/albums/${req.params.id}/photos`),
  ]).then(function (respuestas) {
    return Promise.all(respuestas.map((respuestas) => respuestas.json()))
  })
    .then(data => {
      let albums = data[0];
      let photos = data[1];
      let album = albums.find(element => {
        if (parseInt(req.params.id) === parseInt(element.id)) {
          element.photos = photos.filter(photo => {
            if (photo.albumId === element.id) {
              delete photo.albumId;
              return photo
            }
          });
          return element;
        }
      });
      album ? res.send(album) : res.send(`Album ${req.params.id} => No encontrado`);
    })
  // res.send(`Hola album ${req.params.id}.`);
});

export default albumsApi;
