import { VM } from 'vm2';
import { reply } from '../utils';
import type { Command } from '.';

export const evaluate: Command = {
  aliases: ['eval', 'evaluate', 'run', 'js'],
  exec: async (input, args, user) => {
    const vm = new VM({
      timeout: 1000,
      allowAsync: false,
    });
    const cmd = args.join(' ');
    let output;

    try {
      output = vm.run(cmd);
    } catch (error) {
      output = error;
    }

    reply(user, output);
  },
};
