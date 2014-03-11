App.InviteView = Ember.View.extend({
  // focusOut: function(){
  //   if (event.target.value){
  //     var target = event.target;
  //     var _this = this;
  //     data = {user: event.target.value};
  //     $.get('api/v1/users/exists', data).then(function(){
  //       _this.controller.toggleProperty('foundUser');
  //     }, function(){
  //       _this.controller.toggleProperty('noUser');
  //       _this.controller.set('errors', 'User not found');
  //     });
  //   }
  // }
  didInsertElement: function(){
    var users = new Bloodhound({
      datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.username); },
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      limit: 10,
      prefetch: {
        url: '../api/v1/users.json',
        filter: function(list) {
          return $.map(list.users, function(user) { return { username: user.username }; });
        }
      }
    });

    users.initialize();
    $('.typeahead').typeahead(null, {
      name: 'users',
      displayKey: 'username',
      source: users.ttAdapter()
    });
  }
});
