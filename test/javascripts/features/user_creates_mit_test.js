module('Create mit', {
  setup: function(){
  },
  teardown: function(){
    App.reset();
  }
});

test('a user must be signed in to visit the new mits page', function(){
  visit('/mits/new');
  andThen(function(){
    ok(App.__container__.lookup('controller:application').get('currentPath'), 'index', 'Redirected to the home page');
  });
});
