import chalk from "chalk";

export function failure(...args) {
  if (args.length === 1 && args[0].message !== undefined) {
    console.error(chalk.red(args[0].message));
  } else {
    console.error(chalk.red(...args));
  }
  process.exit(1);
}
