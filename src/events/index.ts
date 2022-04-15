import { bits } from './bits';
import { donation } from './donation';
import { follow } from './follow';
import { raid } from './raid';
import { subscription } from './subscription';

export type Event = {
  type: string;
  exec: (message: any) => void;
};

export const events: Event[] = [bits, donation, follow, raid, subscription];
