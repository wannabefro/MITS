function clearUser(){
  visit('/');
  try {
    Ember.run(function(){
      if ('a:contains("Logout")'){
        click('a:contains("Logout")');
      }
    })
  } catch(e){
  }
}
