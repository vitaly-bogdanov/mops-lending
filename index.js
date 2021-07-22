import { app, bot } from './server/index.js';
import { serverCli } from './server/index.js';

// export const httpsServer = https.createServer({
//   key: fs.readFileSync('../cert/key.pem'),
//   cert: fs.readFileSync('../cert/cert.pem')
// }, app);


// export const server = http.createServer(app);

bot.launch();
app.listen(1234, () => console.log('Server start!'));