App.MitIndexRoute = Ember.Route.extend({
  model: function(query, transition){
    return this.store.find('mit', transition.params.mit.mit_id);
  }
})
