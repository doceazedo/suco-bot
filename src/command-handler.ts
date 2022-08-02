import { commands } from './commands';
import { replyError, loggr } from './utils';
import type { ChatUserstate } from 'tmi.js';
import { blocklist } from './helpers';

const commandHandler = (
  channel: string,
  user: ChatUserstate,
  message: string
) => {
  const args = message.split(' ');
  const input = args.shift()?.substring(1).toLowerCase() || '';

  if (user['user-id'] && blocklist.includes(user['user-id'])) {
    loggr.warn(
      `${user.username} tried to run command "${input}" but they're blocked`
    );
    return;
  }

  const command = commands.find((cmd) => cmd.aliases?.includes(input));
  if (!command) {
    replyError(user, `não conheço esse comando "${input}" 😔`);
    loggr.warn(`${user.username} tried to run unknown command "${input}"`);
    return;
  }

  try {
    command.exec(input, args, user);
    loggr.info(`${user.username} issued command "${input}"`);
  } catch (error) {
    loggr.error(
      `An error occurred when ${user.username} tried to issue command "${input}"`
    );
    console.log(error);
  }
};

export default commandHandler;
