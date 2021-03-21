#!/usr/bin/env node
const inquirer = require('inquirer');
const path = require('path');
const { writeFile, readdir, readFile } = require('fs').promises;
const { ConfigFileOptions } = require('./consts.js');

const configFiles = {};
const configFolderPath = path.resolve(__dirname, 'configs');

(async function () {
  // choose config
  const { choice } = await inquirer.prompt([
    {
      type: 'list',
      message: 'Choose config file',
      name: 'choice',
      choices: Object.keys(ConfigFileOptions),
    },
  ]);

  if (choice === ConfigFileOptions['tsconfig.json']) {
    const framework = await chooseTsConfigFramework();
    writeConfigFile({
      src: `tsconfig.${framework}.json`,
      des: 'tsconfig.json',
    });
  } else {
    writeConfigFile({
      src: ConfigFileOptions[choice],
      des: ConfigFileOptions[choice],
    });
  }
})();

async function writeConfigFile(params = {
  src: '', des: ''
}) {
  const { src, des } = params;
  const config = await readFile(`${configFolderPath}/${src}`).catch(
    (err) => {
      console.error(err);
    },
  );

  const resultFile = path.join(process.cwd(), des);
  await writeFile(resultFile, config.toString());

  console.log(`${des} successfully created`);
}

async function chooseTsConfigFramework() {
  const configFiles = {};
  const files = await readdir(configFolderPath).catch(console.error);

  for (const filename of files) {
    if (!filename.startsWith('tsconfig.')) {
      continue;
    }
    // tsconfig.[framework].json i.e. tsconfig.react.json
    const frameworkName = filename.split('.')[1]; // => react
    configFiles[frameworkName] = path.join(configFolderPath, filename);
  }

  const { framework } = await inquirer.prompt([
    {
      type: 'list',
      message: 'Creating tsconfig.json for:',
      name: 'framework',
      choices: Object.keys(configFiles),
    },
  ]);
  return framework;
}
