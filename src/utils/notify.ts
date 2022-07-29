import os from 'os';
import path from 'path';
import fs from 'fs';
import notifier from 'node-notifier';
import { downloadImage } from '../utils';
import { getUser } from '../clients';
import { loggr } from './loggr';

export const notify = async (
  title: string,
  message: string,
  userId: string
) => {
  const user = await getUser(
    // TODO: remove this
    userId.startsWith('test') ? 'doceazedo911' : userId
  );
  return; // TODO: remove this
  const icon = path.join(os.tmpdir(), `${user?.id}.jpg`);
  await downloadImage(user?.avatar || '', icon);

  notifier.notify(
    {
      title,
      message,
      sound: true,
      icon,
    },
    () => {
      fs.unlink(icon, (error) => {
        if (!error) return;
        loggr.error('Failed to delete notification image:');
        console.log(error);
      });
    }
  );
};
