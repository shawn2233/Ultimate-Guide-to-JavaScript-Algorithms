const searchReplace = require('./index-START')

test('searchReplace is a function', () => {
  expect(typeof searchReplace).toEqual('function');
});

test('replace something in text', () => {
  expect(searchReplace("He is Sleeping on the couch")).toEqual("He is Sitting on the couch");
});

//test function incomplete