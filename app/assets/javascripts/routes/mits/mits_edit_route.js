App.MitsEditRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
  model: function(params) {
    return this.store.find('mit', params.mit_id);
  },
  deactivate: function() {
    var model = this.get('controller.model');
    model.rollback();
  },
  actions: {
    save: function(model) {
      var _this = this;
      model.save().then(function() {
        _this.transitionTo('mits.show', model);
      });
    },
    cancel: function(model) {
      this.transitionTo('mits.show', model);
    }
  }
});
