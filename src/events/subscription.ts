import type { EventSubListener } from '@twurple/eventsub';
import { notify, send } from '../utils';

export const subscriptionEvent = (
  eventSubClient: EventSubListener,
  userId: string
) =>
  eventSubClient.subscribeToChannelSubscriptionEvents(userId, async (e) => {
    notify(
      'Nova inscrição! 🌟',
      `Obrigado por se inscrever, ${e.userDisplayName}`,
      e.userDisplayName
    );
    send(`Obrigado por se inscrever, @${e.userDisplayName} 🌟`);
  });
