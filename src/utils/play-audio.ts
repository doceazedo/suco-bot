import os from 'os';
import fs from 'fs';
import util from 'util';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import sound from 'sound-play';

const writeFile = util.promisify(fs.writeFile);

export const playAudio = async (buffer: any) => {
  const uuid = uuidv4();
  const filePath = path.join(os.tmpdir(), `${uuid}.mp3`);
  await writeFile(filePath, buffer, 'binary');
  sound.play(filePath, 1);
};
