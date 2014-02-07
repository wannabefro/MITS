App.MitsNewRoute = Ember.Route.extend({
  model: function(){
    var user = this.controllerFor('application').get('currentUser');
    return this.store.createRecord('mit', {user: user});
  },
  deactivate: function() {
    var model = this.get('controller.model');
    if (model.get('isNew')) {
      model.deleteRecord();
    }
  },
  actions: {
    save: function(model) {
      var _this = this;
      model.save().then(function() {
        _this.transitionTo('mit.index', model);
      });
    },
    cancel: function() {
      this.transitionTo('mits.index');
    }
  }
});
