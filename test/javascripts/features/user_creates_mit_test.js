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

test('a user cannot submit an mit till all the data is valid', function(){
  signInAsUser();
  visit('/mits/new');
  andThen(function(){
    fillIn('input[name="title"]', 'Best mit ever');
    fillIn('textarea[name="body"]', 'Best mit ever');
    click('button:contains("Submit")');
    andThen(function(){
      ok(hasContent('Best mit ever'), 'Found MIT title');
      ok(hasContent('Actions'), 'Found actions');
    })
  })
});

QUnit.moduleStart(function(){
  mockMits();
  mockMitsNew();
});
