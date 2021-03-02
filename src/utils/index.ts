/* eslint-disable no-console */
import emoji from 'node-emoji';
import chalk from 'chalk';

// TODO: Implement Winston Logger
export const logError = (s: string): void => console.log(emoji.emojify(chalk.bold.red(s)));
export const logInfo = (s: string): void => console.log(emoji.emojify(chalk.bold(s)));
export const logDetail = (s: string): void => console.log(emoji.emojify(chalk.dim(s)));
