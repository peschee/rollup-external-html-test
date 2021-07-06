# rollup-external-asset-link-test
Simple test case for importing an asset using `//` in rollup + @web/rollup-plugin-html:

```html
<link rel="icon" type="image/png" sizes="32x32" href="//microservice1/file.png" />
```

and

`npm run build`

gives

```
index.html → dist...
[!] Error: Could not find /rollup-external-html-test/microservice1/file.png referenced from HTML file index.html from element .
Error: Could not find /rollup-external-html-test/microservice1/file.png referenced from HTML file index.html from element .
    at Object.extractAssets (/rollup-external-html-test/node_modules/@web/rollup-plugin-html/src/input/extract/extractAssets.ts:41:17)
    at Object.extractModulesAndAssets (/rollup-external-html-test/node_modules/@web/rollup-plugin-html/src/input/extract/extractModulesAndAssets.ts:27:7)
    at createInputData (/rollup-external-html-test/node_modules/@web/rollup-plugin-html/src/input/getInputData.ts:40:18)
    at Object.getInputData (/rollup-external-html-test/node_modules/@web/rollup-plugin-html/src/input/getInputData.ts:93:22)
    at Object.options (/rollup-external-html-test/node_modules/@web/rollup-plugin-html/src/rollupPluginHTML.ts:50:16)
    at /rollup-external-html-test/node_modules/rollup/dist/shared/rollup.js:20828:43
```
