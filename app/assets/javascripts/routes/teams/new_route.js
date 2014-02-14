App.TeamsNewRoute = Ember.Route.extend({
  model: function(){
    return this.store.createRecord('team');
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
        _this.transitionTo('team.index', model);
      });
    },
    cancel: function() {
      this.transitionTo('teams.index');
    }
  }
});
