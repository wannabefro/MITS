function fillOutSignupForm(username, email, password, passwordConfirmation){
  fillIn('input[name="username"]', username);
  fillIn('input[name="email"]', email);
  fillIn('input[name="password"]', password);
  fillIn('input[name="passwordConfirmation"]', passwordConfirmation);
}
