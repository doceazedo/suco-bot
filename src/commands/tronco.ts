import { send } from '../utils';
import type { Command } from '.';

let troncos = {} as any

const randomNumber = () => Math.floor(Math.random() * (30 - 1) + 1)

const makeTronco = () => {
    const size = randomNumber()

    if (size < 5) {
        return [size, 'pipico piquitito BibleThump']
    }

    if (size < 10) {
        return [size, 'faz um esforço que fica aceitavel VoHiYo']
    }

    if (size < 13) {
        return [size, 'médio KonCha']
    }

    if (size < 16) {
        return [size, 'uie... TehePelo']
    }

    if (size < 20) {
        return [size, 'maior que o meu PunOko']
    }

    if (size < 25) {
        return [size, 'bem maior que o meu NotLikeThis']
    }

    if (size < 28) {
        return [size, 'aberração genetica imensa... PogChamp']
    }

    return [size, 'parabéns... você passou da minha regua... ta feliz? eu não to não... some daqui, vai']
}

const get_tronco = (userName: PropertyKey) => {
    if (troncos.hasOwnProperty(userName)) {
        return troncos[userName]
    }

    troncos[userName] = make_tronco()

    return troncos[userName]
}

export const tronco: Command = {
  aliases: ['tronco', 'geba', 'giromba', 'jamanta', 'pika', 'bengaladokid', 'britadeira', 'trozoba', 'pipico', 'anaconda', 'trambolha', 'baqueta'],
  exec: async (input, args, user) => {
    const tronco_ = get_tronco(user.userName)
    send(
      `@${user.username} tem ${tronco_[0]} cm de tronco ${tronco_[1]}`
    );
  },
};
