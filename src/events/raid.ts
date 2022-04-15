import { notify } from '../utils';

type EventMessageRaid = {
  priority: number;
  _id: string;
  from: string;
  raiders: number;
  payload?: any[];
  name: string;
  repeat: boolean;
  isTest: boolean;
  createdAt: string;
  platform: string;
  type: string;
  hash: string;
  read: boolean;
  historical: boolean;
  forceShow: boolean;
  success: boolean;
  forceRepeat: boolean;
};

export const raid = {
  type: 'raid',
  exec: (message: EventMessageRaid) => {
    notify(
      `${message.name} está fazendo uma raid! 🎊`,
      `${message.raiders} pessoas vieram no grupo!`,
      message.name
    );
  },
};
