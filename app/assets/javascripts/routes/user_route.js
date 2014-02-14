App.UserRoute = Ember.Route.extend({
  activate: function(params){
    this.modelFor('user').reload();
  },
  model: function(params){
    return this.store.find('user', params.user_id);
  }
});
