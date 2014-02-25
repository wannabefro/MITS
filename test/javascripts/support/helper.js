function clearUser(){
  visit('/');
  try {
    Ember.run(function(){
      click('a:contains("Logout")');
    })
  } catch(e){
  }
}
