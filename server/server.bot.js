import { Telegraf } from 'telegraf';
import { sendFormDataEvent } from './server.emitter.js';
import dotenv from 'dotenv';

import { isIdExistService } from './server.service.js';

dotenv.config();

export const bot = new Telegraf(process.env.BOT_TOKEN)
  .command('start', ctx => {
    ctx.reply(`Информация с формы обратной связи с сайта MOps 📣`);
    if (isIdExistService(ctx.message.from.id)) {
      sendFormDataEvent.on(ctx.message.from.id, data => {
        ctx.reply(`Имя: ${data?.name || 'Пусто'}\nТелефон: ${data?.phone || 'Пусто'}\nОписание: ${data.description || 'Пусто'}`);
      });
    } else {
      ctx.reply(`Ваш id: ${ctx.message.from.id}, сообщите его админу`);
    }
  });