import { broadcast } from '../utils';
import type { Command } from '.';

// TODO: Por favor caso queira colocar nos assets :) é só baixar e tacar lá
const videoUrl = [
  'https://video.twimg.com/ext_tw_video/1542211336003788800/pu/vid/480x462/WonZnGI4f6YNQoN8.mp4', // Cadê os banheiros dos não binários
  'https://video.twimg.com/ext_tw_video/1549188691666542592/pu/vid/480x852/_zLpfyiSTzajgMUK.mp4', // Cadê os banheiros dos não binários + Luisa
  'https://video.twimg.com/ext_tw_video/1535360721734737921/pu/vid/480x714/rSC9yxDfncOjM0WN.mp4', // Eu hablo mesmo
  'https://video.twimg.com/ext_tw_video/1550232807145984002/pu/vid/576x576/-0dM0hWtOTYTOnqN.mp4', // Sarrada na cara
  'https://video.twimg.com/ext_tw_video/1549759245809246208/pu/vid/480x852/Yin6wye1p6L40C2r.mp4', // Quantos belle belinha pegou
];

export const odeiopc: Command = {
  aliases: ['hablo', 'hablomesmo', 'euhablomesmo', 'naobinarios', 'cadeobanheiro', 'belle', 'belinha', 'bellebelinha'],
  exec: async () => broadcast('playvideo', videoUrl[Math.floor(Math.random() * videoUrl.length)]),
};
