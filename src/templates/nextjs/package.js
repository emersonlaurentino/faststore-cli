const sharedPackage = require("../shared/package");

module.exports = ({ name }) => {
  const scripts = `"build": "yarn partytown && next build",
      "develop": "yarn partytown && next dev",
      "clean": "next clean",
      "serve": "next start",`;

  const dependencies = `"graphql": "^15.0.0",
      "next": "^12.1.4",
      "next-seo": "^5.4.0",
      "nextjs-progressbar": "^0.0.14",`;

  const devDependencies = `"eslint-config-next": "12.1.5",
      "sass-loader": "^12.6.0",
      "webpack": "^5.72.0",`;

  const resolutions = `"@types/react": "^17.x"`

  return sharedPackage({ name, scripts, dependencies, devDependencies, resolutions });
};
