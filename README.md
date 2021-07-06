# rollup-external-js-module-test
Simple test case for importing an exernal JS module from `//` in rollup + @web/rollup-plugin-html

`npm run build`

gives

```
index.html → dist...
[!] Error: Could not resolve entry module (path/module.js).
Error: Could not resolve entry module (path/module.js).
    at error (/rollup-external-html-test/node_modules/rollup/dist/shared/rollup.js:164:30)
    at ModuleLoader.loadEntryModule (/rollup-external-html-test/node_modules/rollup/dist/shared/rollup.js:19708:20)
    at async Promise.all (index 0)
```
