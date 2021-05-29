const blacklist = require('metro-config/src/defaults/blacklist');

// blacklist is a function that takes an array of regexes and combines
// them with the default blacklist to return a single regex.

module.exports = {
  resolver: {
    blacklistRE: process.env.STORYBOOK
      ? blacklist(['storybook/index.prod.js'])
      : blacklist(['storybook/index.js']),
    sourceExts: ['js', 'prod.js', 'ts', 'tsx'],
  },
};
