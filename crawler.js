var Browser = require("zombie");
var args = process.argv.splice(2);

Browser.visit(args[0], function() {
});
