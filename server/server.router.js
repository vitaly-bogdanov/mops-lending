import path from 'path';
import { Router } from 'express';

import { sendFormDataEvent } from './server.emitter.js';

export const router = new Router();

router.get('/', (request, response) => {
  response.status(200).sendFile(path.resolve('index.html'));
});

router.post('/send', async (request, response) => {
  sendFormDataEvent.emit(request.body);
  response.redirect('/');
});