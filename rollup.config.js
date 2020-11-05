import html from '@web/rollup-plugin-html';

// noinspection JSUnusedGlobalSymbols
export default {
  input: 'index.html',
  output: { dir: 'dist' },
  plugins: [
    html()
  ],
};
