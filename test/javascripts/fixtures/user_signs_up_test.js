module('Sign up', {
  setup: function() {
  },
  teardown: function() {
    App.reset();
  }
});

test('Sign up validations', function(){
  visit('/sign_up');
  ok(hasContent('Fill out your details above'), 'Not valid input yet');
  fillOutSignupForm('test', 'test@test.com', 'Password1', 'Password1');
  andThen(function(){
    ok(hasContent('Submit'), 'Valid input');
  });
});

test('Creating a user', function(){
  visit('/sign_up');
  fillOutSignupForm('test', 'test@test.com', 'Password1', 'Password1');
  click('button:contains("Submit")');
  andThen(function(){
    ok(hasContent('Welcome test'), 'User signed up');
    ok(hasContent('Logout'), 'User signed up');
  });
});

QUnit.moduleStart(function(){
  mockRegistrations();
  mockSignin();
});

