App.MitsIndexRoute = Ember.Route.extend({
  model: function(params){
    if (params.date === 'Today') params.date = moment().format('MM-DD-YYYY'); 
    return this.store.findQuery('mit', params);
  },
  actions: {
    queryParamsDidChange: function(){
      this.refresh();
    }
  }
});
