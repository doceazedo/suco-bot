import { ping } from './ping';
import type { ChatUserstate } from 'tmi.js';

export type Command = {
  aliases?: string[];
  exec: (input: string, args: string[], user: ChatUserstate) => void;
};

export const commands: Command[] = [ping];
