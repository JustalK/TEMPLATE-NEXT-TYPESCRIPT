const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    PHRASE_KEY: '00000000000000004158e0858d2fa45c',
    PHRASE_ACTIVE_EDITOR: false,
  },
};
