import type { ChatUserstate } from 'tmi.js';
import { evaluate } from './eval';
import { ping } from './ping';
import { sh } from './sh';
import { song } from './song';

export type Command = {
  aliases?: string[];
  exec: (input: string, args: string[], user: ChatUserstate) => void;
};

export const commands: Command[] = [evaluate, ping, sh, song];
