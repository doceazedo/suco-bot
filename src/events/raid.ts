import type { EventSubListener } from '@twurple/eventsub';
import { getUser } from '../clients';
import { broadcast, notify, send } from '../utils';

export const raidEvent = (eventSubClient: EventSubListener, userId: string) =>
  eventSubClient.subscribeToChannelRaidEventsTo(userId, (e) => {
    notify(
      `${e.raidingBroadcasterDisplayName} está fazendo uma raid! 🎊`,
      `${e.viewers} pessoas vieram no grupo!`,
      e.raidingBroadcasterDisplayName
    );
    send(
      `${e.raidingBroadcasterDisplayName} está fazendo uma raid com ${e.viewers} pessoas! 🎊`
    );
    setTimeout(async () => {
      const data = await getUser(e.raidingBroadcasterDisplayName);
      broadcast('cmd:sh', data);
    }, 5000);
    broadcast('event:raid');
  });
