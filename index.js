var level = require('levelup');
var levelgraph = require('levelgraph');
var db = window.db = level( 'graph-db', {db: require('memdown')} );
var graph = window.graph = levelgraph(db);

graph.put({ subject: 'a', predicate: 'b', object: 'c' }, function(err) {
  if (err) console.log(err);
});

window.readDb = function() {
  db.createReadStream().on('data', console.log.bind(console));
};

window.readGraph = function() {
  graph.get({}, console.log.bind(console));
};

window.log = console.log.bind(console);
