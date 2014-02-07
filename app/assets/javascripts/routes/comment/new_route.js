App.CommentNewRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
  model: function(query, transition){
    var mit = this.store.getById('mit', transition.params.mit.mit_id);
    var user = this.controllerFor('application').get('currentUser');
    return this.store.createRecord('comment', {user: user, mit: mit});
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
        _this.transitionTo('mit', model.get('mit'));
      });
    },
    cancel: function() {
      this.transitionTo('mits.index');
    }
  }
});
