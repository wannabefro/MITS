App.MitsShowRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('mit', params.mit_id);
  },
  actions: {
    destroyRecord: function(model) {
      var _this = this;
      model.destroyRecord().then(function() {
        _this.transitionTo('mits.index');
      });
    }
  }
});
