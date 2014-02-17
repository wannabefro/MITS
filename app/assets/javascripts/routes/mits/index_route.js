App.MitsIndexRoute = Ember.Route.extend({
  model: function(params){
    return this.store.findQuery('mit', params);
  },
  actions: {
    queryParamsDidChange: function(){
      this.refresh();
    }
  }
});
