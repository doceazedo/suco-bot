import type { ChatUserstate } from 'tmi.js';
import { alan } from './alan';
import { ban } from './ban';
import { bellebelinha } from './bellebelinha';
import { discord } from './discord';
import { dog } from './dog';
import { evaluate } from './eval';
import { followage } from './followage';
import { help } from './help';
import { hug } from './hug';
import { kiss } from './kiss';
import { maldicao } from './maldicao';
import { odeiopc } from './odeiopc';
import { overlay } from './overlay';
import { ping } from './ping';
import { pronouns } from './pronouns';
import { punch } from './punch';
import { rasteira } from './rasteira';
import { sh } from './sh';
import { social } from './social';
import { song } from './song';
import { specs } from './specs';
import { team } from './team';
import { tronco } from './tronco';
import { tts } from './tts';
import { whois } from './whois';
import { xxx } from './xxx';

export type Command = {
  aliases?: string[];
  exec: (input: string, args: string[], user: ChatUserstate) => void;
};

export const commands: Command[] = [
  alan,
  ban,
  bellebelinha,
  discord,
  dog,
  evaluate,
  followage,
  help,
  hug,
  kiss,
  maldicao,
  odeiopc,
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
  whois,
  xxx,
];
