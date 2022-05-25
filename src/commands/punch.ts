import { broadcast, send } from '../utils';
import type { Command } from '.';

export const punch: Command = {
  aliases: ['punch', 'soco', 'bate', 'knockout'],
  exec: async (input, args, user) => {
    send(
      `@${user.username} enfia um socão na cara de ${args.join(" ")} que vai a nocaute beijando o chão com muito amor PunOko BOP`
    );
  },
};
