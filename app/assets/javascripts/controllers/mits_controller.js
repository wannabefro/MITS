App.MitsController = Ember.ArrayController.extend({
  groupByDate: function(){
    return this.get('content').groupBy('date');
  }.property('content.@each.date')
});
