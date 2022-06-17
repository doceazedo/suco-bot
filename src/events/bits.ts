import type { EventSubListener } from '@twurple/eventsub';
import { notify, send } from '../utils';

export const bitsEvent = (eventSubClient: EventSubListener, userId: string) =>
  eventSubClient.subscribeToChannelCheerEvents(userId, (e) => {
    const displayName = e.userDisplayName || 'Anonimo';
    const title = `${displayName} mandou ${e.bits} bits! 💎`;
    notify(title, e.message, displayName);
    send(`@${title}`);
  });
