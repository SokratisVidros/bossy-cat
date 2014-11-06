var test = require('tape')
  , Cat = require('./../final-boss-cat.es5')
  , cat = new Cat();

test('Cat meows', function (t) {
  t.equals('MROW', cat.meow());
  t.end();
});
