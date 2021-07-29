import path from 'path';
import express from 'express';
import { router } from './server.router.js';
import { redirectToHttpsMiddleware } from './server.middleware.js';

export const app = express()
  .use(redirectToHttpsMiddleware)
  .use(express.urlencoded({ extended: false }))
  .use(express.static(path.resolve('public')))
  .use(router);