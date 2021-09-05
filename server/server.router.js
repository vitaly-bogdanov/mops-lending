import path from 'path';
import { Router } from 'express';

import { sendFormDataEvent } from './server.emitter.js';
import { getAllIdsService } from './server.service.js';

export const router = new Router();

router.get('/', (request, response) => {
  response.status(200).sendFile(path.resolve('index.html'));
});

router.get('/3m4ugkkltecr94xr42hcebjt4dki8i.html', (request, response) => {
  response.status(200).sendFile(path.resolve('3m4ugkkltecr94xr42hcebjt4dki8i.html'));
});

router.post('/send', async (request, response) => {
  getAllIdsService().forEach(id => {
    sendFormDataEvent.emit(id, request.body);
  });
  response.redirect('/');
});