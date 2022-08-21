import { broadcast } from '../utils';
import type {
  EventSubChannelRedemptionAddEvent,
  EventSubListener,
} from '@twurple/eventsub';

type Reward = {
  id: string;
  handler: (e: EventSubChannelRedemptionAddEvent) => void;
};

const rewards: Reward[] = [
  {
    // 🐴 Cavalo
    id: 'e2985ae2-aa0b-40e4-a80d-64bcaa1fe07f',
    handler: () => broadcast('play:audio', 'cavalo'),
  },
];

export const rewardEvent = (
  eventSubClient: EventSubListener,
  userId: string
) => {
  const registeredEvents = rewards.map((reward) =>
    eventSubClient.subscribeToChannelRedemptionAddEventsForReward(
      userId,
      reward.id,
      reward.handler
    )
  );
  return registeredEvents[0];
};
