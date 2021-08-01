import https from 'https';
import http from 'http';
import fs from 'fs';

import { app, bot } from './server/index.js';

const key = fs.readFileSync('./cert/www.magnumopus.space.key', 'utf-8');
const cert = fs.readFileSync('./cert/www.magnumopus.space.crt', 'utf-8');

https.createServer({ key, cert }, app)
  .listen(1234, () => console.log('https server start!'));

bot.launch();