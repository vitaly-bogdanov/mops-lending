import { CLI_COMMAND } from './server.constant.js';
import { addIdService } from './server.service.js';

export const serverCli = () => {
  switch(process.argv[2]) {
    case CLI_COMMAND.SET_ADMIN_ID:
      addIdService(process.argv[3]);
      break;
    default:
      console.log('Что-то пошло не так');
  }
}