/* eslint-disable */
const fs = require('fs');
const path = require("path");

const nojekyllPath = path.resolve(__dirname, "../out/.nojekyll");
fs.closeSync(fs.openSync(nojekyllPath, "w"));

const cnamePath = path.resolve(__dirname, "../out/CNAME");
fs.writeFileSync(cnamePath, 'www.adamkrasny.com');
