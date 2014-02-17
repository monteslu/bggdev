var bgg = require('bgg');


function handleRequest(req, res, type){
  bgg(type, req.query)
  .then(function(results){
    if(req.query.callback){
      res.jsonp(results);
    }else{
      res.send(results);
    }

  })
  .otherwise(function(err){
    res.send(500, err);
  });
}

var types = [
  'thing',
  'family',
  'forumlist',
  'forum',
  'thread',
  'user',
  'guild',
  'plays',
  'collection',
  'hot',
  'search'
];

types.forEach(function(type){
  exports[type] = function(req, res){
    handleRequest(req, res, type);
  };
});

exports.types = types;


