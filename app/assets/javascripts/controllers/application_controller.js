App.ApplicationController = Ember.Controller.extend({
  needs: 'login',
  success: null,
  currentUser: null,
  errors: null,

  currentPathDidChange: function(){
    this.set('success', null);
    this.set('errors', null);
  }.observes('currentPath'),

  actions: {
    login: function(){
      user = this.getProperties('identification', 'password');
      this.get('controllers.login').send('authenticate', user);
    }
  }
});
