import { send } from '../utils';
import type { Command } from '.';

const praga = [
  "ser afogadu num tanque cheio de tubarões por um psicopata gostoso yandere que canta bem que não aceita o fim da relação",
  "virar um proletariadu que trabalha numa mina de amianto pra ganhar um pacote de doritos por dia pra alimentar a esposa e 300 filhos enquanto nada numa represa de lama tóxica da mineradora over rica que não liga pra ele."
]

const get_offense = () => praga[Math.floor(Math.random()*praga.length)]

export const maldicao: Command = {
  aliases: ['maldicao', 'praga', 'coisaruim', 'ritual'],
  exec: async (input, args, user) => {
    send(
      `${args.join(" ")} vai ${get_offense()} PunOko`
    );
  },
};
