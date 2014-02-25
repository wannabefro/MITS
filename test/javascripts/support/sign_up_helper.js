function fillOutSignupForm(username, email, password, passwordConfirmation){
  fillIn('input[name="username"]', username);
  fillIn('input[name="email"]', email);
  fillIn('input[name="password"]', password);
  fillIn('input[name="passwordConfirmation"]', passwordConfirmation);
}

function signInAsUser(){
  visit('/');
  mockSignin();
  andThen(function(){
    fillIn('form .username', 'test');
    fillIn('form .password', 'Password1');
    click('button:contains("Sign In")');
  });
}

