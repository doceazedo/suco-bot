import { broadcast, send } from '../utils';
import type { Command } from '.';

export const xxx: Command = {
  aliases: ['xxx'],
  exec: async (input, args, user) => {
    broadcast('cmd:xxx');
    send(
      `@${user.username} ama ${args.join(" ")}... excessivamete... aqui não @${user.username}... tem crianças aqui.`
    );
  },
};
