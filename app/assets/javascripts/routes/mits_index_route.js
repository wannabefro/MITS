App.MitsIndexRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('mit');
  }
});
