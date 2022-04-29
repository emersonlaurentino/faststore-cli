const { outputFile } = require("fs-extra");

const createSite = async (name, options) => {
  const BASE_NAME = `${name}.store`;
  const BASE_PATH = `${process.cwd()}/${BASE_NAME}`;

  const { default: packageJson } = await import(
    `../templates/${options.framework}/package.js`
  );
  await outputFile(`${BASE_PATH}/package.json`, packageJson({ name }));
};

module.exports = createSite;
