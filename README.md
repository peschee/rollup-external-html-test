# rollup-external-html-test
Simple test case for importing an absolute path in rollup + external + @web/rollup-plugin-html

`npm run build`

gives

```
index.html → dist...
[!] Error: Could not resolve entry module (path/module.js).
Error: Could not resolve entry module (path/module.js).
    at error (/Users/psiska/Projects/temp/rollup-external-html-test/node_modules/rollup/dist/shared/rollup.js:5252:30)
    at ModuleLoader.loadEntryModule (/Users/psiska/Projects/temp/rollup-external-html-test/node_modules/rollup/dist/shared/rollup.js:18414:20)
    at async Promise.all (index 0)
```
