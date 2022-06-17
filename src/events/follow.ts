import type { EventSubListener } from '@twurple/eventsub';
import { notify, send } from '../utils';

export const followEvent = (eventSubClient: EventSubListener, userId: string) =>
  eventSubClient.subscribeToChannelFollowEvents(userId, (e) => {
    notify(
      `Novo follow! 💜`,
      `${e.userDisplayName} te seguiu.`,
      e.userDisplayName
    );
    send(`@${e.userDisplayName} acabou de seguir! 💜`);
  });
