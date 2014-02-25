module('Sign up', {
  setup: function() {
  },
  teardown: function() {
    App.reset();
  }
});

test('A user should be able to successfully sign in', function(){
  visit('/');
  andThen(function(){
    fillIn('form .username', 'test');
    fillIn('form .password', 'Password1');
    click('button:contains("Sign In")');
    andThen(function(){
      ok(App.__container__.lookup('controller:application').get('currentUser.username'), 'test', 'Current User is set');
    });
  });
});

QUnit.moduleStart(function(){
  mockSignin();
  mockLogout();
  clearUser();
});
