var Zombie = require("zombie");

exports.crawl = function(url) {
  Zombie.visit(url, function() {
  });
};
