import path from 'path';
import { Router } from 'express';

import { sendFormDataEvent } from './server.emitter.js';
import { getAllIdsService } from './server.service.js';

export const router = new Router();

router.get('/', (request, response) => {
  response.status(200).sendFile(path.resolve('index.html'));
});

router.post('/send', async (request, response) => {
  getAllIdsService().forEach(id => {
    sendFormDataEvent.emit(id, request.body);
  });
  response.redirect('/');
});