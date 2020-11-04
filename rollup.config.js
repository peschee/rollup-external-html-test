import html from '@web/rollup-plugin-html';

// noinspection JSUnusedGlobalSymbols
export default {
  input: 'index.html',
  output: { dir: 'dist' },
  external: ['/path/module.js'],
  plugins: [
    html()
  ],
};
