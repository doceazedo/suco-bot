import { replyError } from '../utils';
import { pollyVoices } from '../helpers';
import type { Command } from '.';
import { playGoogleTTS, playPollyTTS } from '../utils/play-tts';

export const tts: Command = {
  aliases: ['tts'],
  exec: async (input, args, user) => {
    if (!args.length)
      return replyError(
        user,
        'veja como usar e quais vozes estão disponíveis em https://doceazedo.com/tts'
      );

    const voiceId =
      args[0].charAt(0).toUpperCase() + args[0].slice(1).toLowerCase();

    if (pollyVoices.includes(voiceId)) {
      args.shift();
      playPollyTTS(args.join(' '), voiceId);
      return;
    }

    playGoogleTTS(args.join(' '), 'pt-BR');
  },
};
