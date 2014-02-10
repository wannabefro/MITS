App.InviteView = Ember.View.extend({
  focusOut: function(){
    if (event.target.value){
      var target = event.target;
      var _this = this;
      data = {user: event.target.value};
      $.get('api/v1/users/exists', data).then(function(){
        _this.controller.toggleProperty('foundUser');
      }, function(){
        _this.controller.toggleProperty('noUser');
        _this.controller.set('errors', 'User not found');
      });
    }
  }
});
