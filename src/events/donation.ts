import { notify } from '../utils';

type EventMessageDonation = {
  priority: number;
  _id: string;
  from: string;
  fromId?: string;
  to: { name: string };
  message?: string;
  amount: string;
  currency: string;
  payload: [];
  formattedAmount: string;
  gif?: any;
  facemask?: any;
  mask_name?: any;
  mask_rarity?: any;
  pro?: any;
  pro_extras?: any;
  senderId?: any;
  emotes?: any;
  wishListItem?: any;
  name: string;
  isTest?: boolean;
  repeat?: boolean;
  media?: any;
  alert_status: number;
  createdAt: string;
  type: string;
  source?: string;
  donation_id: number;
  legacyHash: string;
  hash: string;
  read: boolean;
  donationCurrency: string;
  wotcCode?: any;
  crate_item?: any;
  attachments?: any[];
  clippingEnabled: boolean;
  skipAlert: boolean;
  recurring_donation?: boolean;
  historical: boolean;
  forceShow: boolean;
  success: boolean;
  forceRepeat: boolean;
  formatted_amount: string;
};

export const donation = {
  type: 'donation',
  exec: (message: EventMessageDonation) => {
    const fallbackMsg = 'PicPay: @doceazedo';
    const body = message.message ? `"${message.message}"` : fallbackMsg;

    notify(
      `${message.name} transferiu ${message.formattedAmount}! 💰`,
      body,
      message.name
    );
  },
};
