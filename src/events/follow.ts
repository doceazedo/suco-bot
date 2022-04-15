import { notify } from '../utils';

type EventMessageFollow = {
  priority: number;
  _id: string;
  from: string;
  to: string;
  message: string;
  payload: any[];
  name: string;
  repeat: boolean;
  isTest: boolean;
  createdAt: string;
  platform: string;
  type: string;
  hash: string;
  read: boolean;
  wotcCode?: any;
  historical: boolean;
  forceShow: boolean;
  success: boolean;
  forceRepeat: boolean;
};

export const follow = {
  type: 'follow',
  exec: (message: EventMessageFollow) => {
    notify(`Novo seguidor! 💜`, `${message.name} te seguiu.`, message.name);
  },
};
