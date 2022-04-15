import { broadcast, send, isModerator } from '../utils';
import { getUser } from '../clients/overlay';
import type { Command } from '.';

export const sh: Command = {
  aliases: ['sh'],
  exec: async (input, args, user) => {
    if (!isModerator(user)) {
      send('/me Somente o Doce pode usar esse comando 🤭', 'Red');
      return;
    }

    const targetUser = args?.[0] || 'doceazedo911';
    const data = await getUser(targetUser);
    broadcast('cmd:sh', data);
  },
};
