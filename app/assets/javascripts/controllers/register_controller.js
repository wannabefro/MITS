App.RegisterController = Ember.ObjectController.extend({
  valid: false,
  needs: ['login', 'application'],

  isValid: function(){
    var that = this;
    this.get('content').validate().then(function(){
      valid = that.get('content').get('isValid');
      that.set('valid', valid);
    }, function(){
      valid = that.get('content').get('isValid');
      that.set('valid', valid);
    });
    return this.get('valid');
  }.property('username', 'email', 'password', 'passwordConfirmation', 'valid'),

  actions: {
    submit: function(){
      if ($('button').is(':disabled')) return false;
      var that = this;
      var user = this.getProperties('username', 'email', 'password', 'passwordConfirmation');
      var login = this.getProperties('username', 'password');
      var data = {user: user};
      $.post('/api/v1/registrations', data).then(function(response){
      Ember.run(function() {
        that.get('controllers.login').send('authenticate', login);
        });
        that.get('controllers.application').set('success', 'Welcome ' + user.username);
      }, function(err){
        var errors = '';
        $.each(err.responseJSON.errors, function(key, value){ errors += key + ' ' + value + '. '});
        that.set('controllers.application.errors', errors);
        that.transitionToRoute('register');
      });
    },
    cancel: function() {
      this.transitionToRoute('index');
      return this.get('content').rollback();
    }
  }
});
