import { send } from '../utils';
import type { Command } from '.';

const praga = [
  "achar que react é mais legal que svelte",
  "que eu quis",
  "ser trouxa",
  "testar em prod",
  "dar delete sem where",
  "não agradescer ao allan turing",
  "ser coach vampiro quantico relativistico oscilatorio vibracional elastico escalavel business for enterprises blockchain de kubernetes com javascript versão python",
  "roubar vaquinhas da minha fazenda do minecraft",
  "usar a privada entupida",
  "dar skip na musica boa",
  "soltar pum em baixo da coberta",
  "dormir roncando no meio da reunião com o microfone aberto"
]

const get_offense = () => praga[Math.floor(Math.random()*praga.length)]

export const ban: Command = {
  aliases: ['ban', 'kick', 'bane', 'somedaqui'],
  exec: async (input, args, user) => {
    send(
      `${args.join(" ")} levou ban por ${get_offense()} PunOko`
    );
  },
};
