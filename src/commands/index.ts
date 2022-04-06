import { ping } from './ping';
import { song } from './song';

import type { ChatUserstate } from 'tmi.js';

export type Command = {
  aliases?: string[];
  exec: (input: string, args: string[], user: ChatUserstate) => void;
};

export const commands: Command[] = [ping, song];
