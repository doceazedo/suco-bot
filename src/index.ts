import client from './client';
import io from './websockets';
import commandHandler from './command-handler';
import { loggr } from './utils';
import 'dotenv/config';

const { TWITCH_CHANNEL, PORT } = process.env;

loggr.init(`Connecting to channel ${TWITCH_CHANNEL}...`);
client.connect();

client.on('message', (channel, tags, message, self) => {
  if (self || !message.startsWith('!')) return;
  commandHandler(channel, tags, message);
});

const wsPort = parseInt(PORT || '80');
loggr.init(`Websocket server listening to port ${wsPort}...`);
io.listen(wsPort);
