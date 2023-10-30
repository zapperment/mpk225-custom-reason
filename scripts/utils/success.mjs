import chalk from "chalk";

export function success(...args) {
  console.log(chalk.green(...args));
  process.exit(0);
}
