import type { EventSubListener } from '@twurple/eventsub';
import { broadcast, send } from '../utils';

export const followEvent = (eventSubClient: EventSubListener, userId: string) =>
  eventSubClient.subscribeToChannelFollowEvents(userId, (e) => {
    send(`@${e.userDisplayName} acabou de seguir! 💜`);
    broadcast('event:follow', {
      title: 'Novo follow! 💜',
      detailsTile: `${e.userDisplayName} te seguiu.`,
      displayName: e.userDisplayName,
    });
  });
