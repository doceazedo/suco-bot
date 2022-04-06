import io from '../websockets';

export const broadcast = (message: string, details?: any[]) => {
  io.local.emit(message, details);
};
