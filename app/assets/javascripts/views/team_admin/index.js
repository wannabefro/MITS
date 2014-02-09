App.TeamAdminIndexView = Ember.View.extend({
  focusOut: function(){
    if (event.target.value){
      var target = event.target;
      var formGroup = $(target).parent().parent();
      formGroup.removeClass('has-success has-error');
      data = {user: event.target.value};
      $.get('api/v1/users/exists', data).then(function(){
        formGroup.addClass('has-success');
      }, function(){
        formGroup.addClass('has-error');
        formGroup.find('.help-block').text('User not found');
      });
    }
  }
});
