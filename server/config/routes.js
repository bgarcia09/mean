console.log("modular routes loaded...")
var robots = require('../controllers/robots.js');
module.exports = function(app){

  app.get('/robots', robots.index);
  app.post('/robots', robots.create);
  app.delete('/robots/:id', robots.delete);
  app.get('/robots/:id', robots.show);
  app.put('/robots/:id', robots.update);
  app.post('/robots/:id/review', robots.review);
}