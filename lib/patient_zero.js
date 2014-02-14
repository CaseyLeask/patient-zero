var Zombie = require("zombie");

exports.crawl = function(url) {
  function extractOrigin(url) {
    return url.match(/https?:\/\/.*?\//);
  }
  Zombie.visit(url, function(e, zombie) {
    zombie.on("error", function(error) {
      console.log("Error ", url, " ", error);
    });
    origin = extractOrigin(url);
    zombie.queryAll('a')
          .map(function(link) {
            return link.getAttribute('href'); })
          .map(function(url) {
            if (url.indexOf('/') === 0) {
              return origin + url.substring(1);
            }
            return url; })
          .forEach(function(url) {
            Zombie.visit(url, function(e, zombie) {
              zombie.on("error", function(error) {
                console.log("Error ", url, " ", error);
              });
            }); });
  });
};
