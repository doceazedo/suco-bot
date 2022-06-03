import type { ChatUserstate } from 'tmi.js';
import { alan } from './alan';
import { discord } from './discord';
import { evaluate } from './eval';
import { help } from './help';
import { hug } from './hug';
import { kiss } from './kiss';
import { maldicao } from './maldicao';
import { overlay } from './overlay';
import { ping } from './ping';
import { pronouns } from './pronouns';
import { punch }from './punch';
import { rasteira } from './rasteira';
import { sh } from './sh';
import { social } from './social';
import { song } from './song';
import { specs } from './specs';
import { team } from './team';
import { tronco } from './tronco';
import { tts } from './tts';
import { xxx } from './xxx';

export type Command = {
  aliases?: string[];
  exec: (input: string, args: string[], user: ChatUserstate) => void;
};

export const commands: Command[] = [
  alan,
  discord,
  evaluate,
  help,
  hug,
  kiss,
  maldicao,
  overlay,
  ping,
  pronouns,
  punch,
  rasteira,
  sh,
  social,
  song,
  specs,
  team,
  tronco,
  tts,
  xxx
];
