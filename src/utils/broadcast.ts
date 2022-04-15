import io from '../websockets';

export const broadcast = (message: string, content?: any) => {
  io.local.emit(message, content);
};
