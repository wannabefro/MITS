App.ApplicationController = Ember.Controller.extend({
  needs: 'login',
  success: null,
  currentUser: null,
  errors: null,
  info: null,

  currentPathDidChange: function(){
    this.set('success', null);
    this.set('info', null);
    this.set('errors', null);
    this.send('closeNavbar');
  }.observes('currentPath'),

  userSignedIn: function(){
    this.send('closeNavbar');
  }.property('currentUser'),

  actions: {
    login: function(){
      user = this.getProperties('identification', 'password');
      this.get('controllers.login').send('authenticate', user);
    },

    closeNavbar: function(){
      var collapseButton = $('.navbar-header button');
      if (!collapseButton.hasClass('collapsed')){
        collapseButton.click();
      }
    }
  }
});
