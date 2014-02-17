App.MitIndexRoute = Ember.Route.extend({
  model: function(query, transition){
    return this.store.find('mit', transition.params.mit.mit_id);
  },

  actions: {
    complete: function(model){
      var _this = this;
      model.set('complete', true);
      model.save();
    }
  }
})
