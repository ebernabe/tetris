
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Tetris IO' });
};
exports.tetris = function(req, res){
  res.render('tetris', { title: 'Tetris IO' });
};