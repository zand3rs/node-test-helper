var nodepath = require("path");
require(nodepath.join(__dirname, "lib", "global"));

try {
  requireHelper("bootstrap");
} catch (e) {}
