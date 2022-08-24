import type { EventSubListener } from '@twurple/eventsub';
import { broadcast, notify, send } from '../utils';
import type { AlertEventData } from './events.types';

export const bitsEvent = (eventSubClient: EventSubListener, userId: string) =>
  eventSubClient.subscribeToChannelCheerEvents(userId, (e) => {
    const displayName = e.userDisplayName || 'Anonimo';
    const title = `${displayName} mandou ${e.bits} bits! 💎`;
    notify(title, e.message, displayName);
    send(`@${title}`);
    broadcast<AlertEventData>('event:alert', {
      title: `${e.userDisplayName} madou ${e.bits}!`,
      message: e.message,
      image: 'assets/img/rei-chair.gif',
    });
  });
