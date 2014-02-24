function fillOutSignupForm(username, email, password, passwordConfirmation){
  fillIn('input[name="username"]', username);
  fillIn('input[name="email"]', email);
  fillIn('input[name="password"]', password);
  fillIn('input[name="passwordConfirmation"]', passwordConfirmation);
}

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

