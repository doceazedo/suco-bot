import { notify, send } from '../utils';

type EventMessageBits = {
  priority: number;
  _id: string;
  from: string;
  from_display_name: string;
  amount: number;
  message: string;
  currency?: string;
  payload?: any[];
  name: string;
  display_name: string;
  repeat: boolean;
  isTest: boolean;
  platform: string;
  createdAt: string;
  type: string;
  style: string;
  hash: string;
  emotes?: any;
  read: boolean;
  facemask?: any;
  historical: boolean;
  forceShow: boolean;
  success: boolean;
  forceRepeat: boolean;
};

export const bits = {
  type: 'bits',
  exec: (message: EventMessageBits) => {
    const title = `${message.name} mandou ${message.amount} bits! 💎`;
    notify(title, message.message, message.name);
    send(`@${title}`);
  },
};
