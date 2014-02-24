module('Sign up', {
  setup: function() {
  },
  teardown: function() {
    App.reset();
  }
});

function mockRegistrations(){
  $.mockjax({
    url: '/api/v1/registrations',
    responseText: {
      status: 'success'
    }
  });
}

function mockSignin(){
  $.mockjax({
    url: '/api/v1/sign_in',
    responseText: {
      access_token:"f9EEz7qsrEGkkN8YrxGt",
      token_type:"bearer",
      user:{user:{"id":1,"username":"test"}}
    }
  });
}

test('Sign up validations', function(){
  visit('/sign_up');
  ok(hasContent('Fill out your details above'), 'Not valid input yet');
  fillOutSignupForm('test', 'test@test.com', 'Password1', 'Password1');
  andThen(function(){
    ok(hasContent('Submit'), 'Valid input');
  });
});

test('Creating a user', function(){
  mockRegistrations();
  mockSignin();
  visit('/sign_up');
  fillOutSignupForm('test', 'test@test.com', 'Password1', 'Password1');
  click('button:contains("Submit")');
  andThen(function(){
    ok(hasContent('Welcome test'), 'User signed up');
    ok(hasContent('Logout'), 'User signed up');
  });
});
