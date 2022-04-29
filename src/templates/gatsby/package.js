const sharedPackage = require("../shared/package");

module.exports = ({ name }) => {
  const scripts = `"build": "yarn partytown && gatsby build",
      "develop": "yarn partytown && gatsby develop",
      "clean": "gatsby clean",
      "serve": "gatsby serve",`;

  const dependencies = `"@reach/router": "^1.3.4",
      "gatsby": "^4.11.1",
      "gatsby-plugin-gatsby-cloud": "^4.11.1",
      "gatsby-plugin-manifest": "^4.11.1",
      "gatsby-plugin-netlify": "^4.2.0",
      "gatsby-plugin-next-seo": "^1.10.0",
      "gatsby-plugin-nprogress": "^4.7.0",
      "gatsby-plugin-robots-txt": "^1.7.0",
      "gatsby-plugin-root-import": "^2.0.8",
      "gatsby-plugin-sass": "^5.11.1",
      "gatsby-plugin-webpack-bundle-analyser-v2": "^1.1.27",
      "react-helmet-async": "^1.2.2",`;

  const devDependencies = `"@babel/core": "^7.17.8",
      "@netlify/plugin-gatsby": "^2.0.0-beta",
      "gatsby-plugin-bundle-stats": "^3.1.3",
      "gatsby-plugin-postcss": "^5.3.0",
      "storybook-addon-gatsby": "^0.0.5",`;

  const resolutions = `"@typescript-eslint/eslint-plugin": "^4",
      "@typescript-eslint/parser": "^4"`

  return sharedPackage({ name, scripts, dependencies, devDependencies, resolutions });
};
