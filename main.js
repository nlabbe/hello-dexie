import Dexie from 'dexie';

var db = new Dexie('mydb');
db.version(1).stores({foo: 'id'});

db.foo.put({id: 1, bar: 'hello rollup'}).then(id => {
    return db.foo.get(id);
}).then (item => {
    alert ("Found: " + item.bar);
}).catch (err => {
    alert ("Error: " + (err.stack || err));
});