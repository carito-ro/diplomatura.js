import express from 'express';
import postsRoutes from './controllers/posts';
import albumRoutes from './controllers/albums';
import userRoutes from './controllers/users';
import os from 'os';
import moment from 'moment';
moment.locale('es');

const app = express();
const PORT = 8081;
const formato = 'MMMM Do YYYY, h:mm:ss a';
const startServer = moment().subtract(os.uptime(), 'seconds');
app.use('/posts', postsRoutes);
app.use('/albums', albumRoutes);
app.use('/users', userRoutes);

const result = {
  serverCurrentTime: moment().format(formato),
  serverStartUpTime: startServer.format(formato),
  serverUpTime: startServer.fromNow(), // usando moment relative time
  status: {
    freemem: os.freemem(),
    totalmem: os.totalmem(),
    uptime: os.uptime(),
    hostname: os.hostname(),
    platform: os.platform(),
  },
};
// Implementar el endpoint de stats aca. GET "/"
app.get('/', function (req, res) {
  res.json({ result });
});

app.listen(PORT);
console.log(`Express started on port ${PORT}`);
