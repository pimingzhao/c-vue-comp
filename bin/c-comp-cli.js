#!/usr/bin/env node

const create = require("../create");
const { readFile } = require("../tool/fileTool");

const argv = process.argv.slice(2);

(async () => {
  if (argv[0] === '-v' || argv[0] === '--version') {
    const packgeConfig = JSON.parse(await readFile(__dirname + "/../package.json"));
    console.log(packgeConfig.version);
    process.exit(0);
  } else if (argv[0] === '-h' || argv[0] === '--help') {
    console.log('usage:');
    console.log(`  -h --help    [show all commands]`);
    console.log('  -v --version [show version]');
    console.log('  name         [create single componet directly]');
    console.log('  dir name     [create folder componet directly]');
    process.exit(0);
  } else if (argv[0] && argv[0].indexOf("-") === 0) {
    console.log("We can't find the command you want to use.")
    console.log("Please try use command: -h")
    process.exit(0);
  } else {
    create(argv);
  }
})()