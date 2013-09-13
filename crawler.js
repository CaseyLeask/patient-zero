var zombie = require("zombie");
var args = process.argv.splice(2);

zombie.visit(args[0], function() {
});
