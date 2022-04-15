import { events } from './events';
import { loggr } from './utils';

const eventHandler = (streamlabsEvent: any) => {
  const event = events.find((e) => e.type == streamlabsEvent.type);
  if (!event) {
    loggr.warn(`Unhandled event "${streamlabsEvent.type}"`);
    return;
  }

  const message = streamlabsEvent.message?.[0];
  if (!message) {
    loggr.error(`Event "${streamlabsEvent.type}" failed: empty message`);
    return;
  }

  loggr.info(`Event "${streamlabsEvent.type}" triggered`);
  event.exec(message);
};

export default eventHandler;
