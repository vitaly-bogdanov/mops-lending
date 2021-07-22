import https from 'https';

import http from 'http';
import path from 'path';
import fs from 'fs';
import express from 'express';
import { router } from './server.router.js';

export const app = express()
  .use(express.urlencoded({ extended: false }))
  .use(express.static(path.resolve('public')))
  .use(router);