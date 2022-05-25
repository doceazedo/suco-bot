import { broadcast, send } from '../utils';
import type { Command } from '.';

export const hug: Command = {
  aliases: ['hug', 'abraço'],
  exec: async (input, args, user) => {
    broadcast('cmd:hug');
    send(
      `@${user.username} abraça ${args.join(" ")} <3`
    );
  },
};
