const { Command } = require("commander");
const createSite = require("./commands/create-site");
const pkg = require("../package.json");

module.exports = async function cli(args) {
  const program = new Command();

  program
    .name("faststore-cli")
    .description("CLI for faststore")
    .version("0.1.0");

  program
    .command("create-site")
    .alias("cs")
    .description("Create a new site.")
    .argument("<name>", "site name")
    .option(
      "-f, --framework <framework>",
      "framework that you want to use",
      "nextjs"
    )
    .action(createSite);

  program.version(pkg.version);
  program.parse(args);
};
