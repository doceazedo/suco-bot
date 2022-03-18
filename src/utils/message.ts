import client from '../client';
import 'dotenv/config';
import type { Userstate } from 'tmi.js';

type Color =
  | 'Blue'
  | 'Coral'
  | 'DodgerBlue'
  | 'SpringGreen'
  | 'YellowGreen'
  | 'Green'
  | 'OrangeRed'
  | 'Red'
  | 'GoldenRod'
  | 'HotPink'
  | 'CadetBlue'
  | 'SeaGreen'
  | 'Chocolate'
  | 'BlueViolet'
  | 'Firebrick';

const channel = process.env.TWITCH_CHANNEL || '';

export const send = (str: string, color: Color = 'SpringGreen') => {
  client.say(channel, `/color ${color}`);
  client.say(channel, str);
};

export const reply = (
  user: Userstate,
  str: string,
  color: Color = 'SpringGreen'
) => {
  send(`@${user.username}, ${str}`, color);
};

export const sendError = (str: string) => {
  send(str, 'Red');
};

export const replyError = (user: Userstate, str: string) => {
  reply(user, str, 'Red');
};
