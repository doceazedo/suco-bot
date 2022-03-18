import client from './client';
import commandHandler from './command-handler';
import { loggr } from './utils';
import 'dotenv/config';

const { TWITCH_CHANNEL } = process.env;

loggr.init(`Connecting to channel ${TWITCH_CHANNEL}...`);
client.connect();

client.on('message', (channel, tags, message, self) => {
  if (self || !message.startsWith('!')) return;
  commandHandler(channel, tags, message);
});
