import type { EventSubListener } from '@twurple/eventsub';
import { broadcast, send } from '../utils';
import type { AlertEventData } from './events.types';

export const followEvent = (eventSubClient: EventSubListener, userId: string) =>
  eventSubClient.subscribeToChannelFollowEvents(userId, (e) => {
    send(`@${e.userDisplayName} acabou de seguir! 💜`);
    broadcast<AlertEventData>('event:alert', {
      title: `${e.userDisplayName} segiu!`,
      message: 'Obrigado e seja bem-vinde!',
      image: 'assets/img/sailor-moon-sailor-mars.gif',
    });
  });
