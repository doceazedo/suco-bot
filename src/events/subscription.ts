import { notify, send } from '../utils';

type EventMessageSubscription = {
  priority: number;
  _id: string;
  from: string;
  from_display_name?: string;
  emotes?: any;
  months?: number;
  streak_months?: number;
  message?: string;
  payload?: any[];
  name: string;
  display_name: string;
  subPlan: string;
  sub_plan: string;
  subscriber_twitch_id: number;
  gifter?: string;
  gifter_display_name?: string;
  count: number;
  repeat?: boolean;
  isTest?: boolean;
  createdAt: string;
  platform: string;
  planName?: string;
  type: string;
  sub_type: string;
  hash: string;
  read?: boolean;
  amount?: number;
  membershipLevel?: number;
  membershipLevelName?: string;
  massSubGiftChildAlerts?: any[];
  isSubgiftExpanded: boolean;
  benefit_end_month?: number;
  historical: boolean;
  forceShow: boolean;
  success: boolean;
  forceRepeat: boolean;
};

export const subscription = {
  type: 'subscription',
  exec: (message: EventMessageSubscription) => {
    const months = message.count == 1 ? 'mês' : 'meses';

    const isPrime = message.subPlan.toLowerCase() == 'prime';
    const isResub = (message.months || 0) > 1;
    const isStrike = (message.streak_months || 0) > 0;

    const resubNote = message.message ? ` - "${message.message}"` : '.';
    const strikeNote = isStrike ? ` (total de: ${message.streak_months}m)` : '';
    const notes = strikeNote + resubNote;

    const subTitle = 'Nova inscrição! 🌟';
    const primeTitle = 'Novo sub Prime! 👑';
    const resubTitle = 'Renovação de sub! 🌟';

    const subMessage = `${message.name} se inscreveu por ${message.months} ${months}.`;
    const resubMessage = `${message.name} se reinscreveu por mais ${message.count} ${months}${notes}`;

    const title = isResub ? resubTitle : isPrime ? primeTitle : subTitle;
    const body = isResub ? resubMessage : subMessage;

    notify(title, body, message.name);
    send(`@${body} 🌟`);
  },
};
