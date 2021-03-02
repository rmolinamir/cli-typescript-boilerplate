import yargs from 'yargs';
import { prompt as ask } from 'inquirer';
import { logInfo } from '../utils';

async function askName(): Promise<string> {
  logInfo(':wave:  Hello stranger!');

  const { name } = await ask([
    {
      type: 'input',
      name: 'name',
      message: "What's your name?",
    },
  ]);

  return name;
}

export interface Params {
  name?: string
}

export const command = 'hello';

export const desc = `Let's get to know each other`;

export const builder: { [key: string]: yargs.Options } = {
  name: { type: 'string', required: false, description: 'your name' },
};

export async function handler({ name }: Params): Promise<void> {
  logInfo(`Oh, nice to meet you, ${name ?? (await askName())}!`);
}
