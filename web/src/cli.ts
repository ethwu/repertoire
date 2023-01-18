import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { SpellPF2e } from 'foundry-pf2e/src/module/item/spell/index';

yargs(hideBin(process.argv))
  .command(
    'get <spell>',
    'Get the description of a spell',
    () => {},
    (argv: any) => {
      console.log('hi', argv);
      const s = new SpellPF2e('fireball')
    }
  )
  .demandCommand(1)
  .parse();