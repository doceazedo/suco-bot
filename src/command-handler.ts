import { commands } from './commands';
import { replyError, loggr } from './utils';
import type { ChatUserstate } from 'tmi.js';

const commandHandler = (
  channel: string,
  user: ChatUserstate,
  message: string
) => {
  const args = message.split(' ');
  const input = args.shift()?.substring(1).toLowerCase() || '';

  const command = commands.find((cmd) => cmd.aliases?.includes(input));
  if (!command) {
    replyError(user, `não conheço esse comando "${input}" 😔`);
    loggr.warn(`${user.username} tried to run unknown command "${input}"`);
    return;
  }

  loggr.info(`${user.username} issued command "${input}"`);
  command.exec(input, args, user);
};

export default commandHandler;
