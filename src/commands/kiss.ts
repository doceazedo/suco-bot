import { broadcast, send } from '../utils';
import type { Command } from '.';

export const kiss: Command = {
  aliases: ['kiss', 'beijo'],
  exec: async (input, args, user) => {
    broadcast('cmd:kiss');
    send(
      `@${user.username} beija ${args.join(" ")} <3`
    );
  },
};