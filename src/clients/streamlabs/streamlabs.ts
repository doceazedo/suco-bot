import io from 'socket.io-client';
import 'dotenv/config';

const { STREAMLABS_SOCKET_API_TOKEN } = process.env;

export const streamlabsClient = io(
  `https://sockets.streamlabs.com?token=${STREAMLABS_SOCKET_API_TOKEN}`,
  {
    transports: ['websocket'],
  }
);
