App.DashboardController = Ember.ObjectController.extend({
  stats: function(){
    return this.get('mitStats').map(function(mit){
      mit = JSON.parse(mit);
      return App.MitStat.create({
        count: mit.count,
        date: mit.date,
        complete: mit.complete
      })
    });
  }.property('mitStats'),

  recentMits: function(){
    return this.get('mits').groupBy('date');
  }.property('mits'),

  groupedStats: function(){
    var groupedByDay = _.groupBy(this.get('stats'), function(mits){return mits.date});
    return _.toArray(groupedByDay);
  }.property('stats'),

  completionRate: function(date){
  }.property('stats')
});
