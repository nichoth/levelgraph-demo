# levelgraph demo

Go to [the demo page](http://demos.nichoth.com/levelgraph-demo/) and open the browser console. Attached to the window object are:

**graph** &ndash; levelgraph instance containing one triple: `{ subject: 'a', predicate: 'b', object: 'c' }`

**db** &ndash; levelup instance used by `graph`

**log** &ndash; `console.log.bind(console)`

**readDb** &ndash; read the contents of `window.db` to the console

**readGraph** &ndash; log the output of `graph.get({})`
