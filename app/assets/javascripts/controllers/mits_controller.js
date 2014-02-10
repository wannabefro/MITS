App.MitsController = Ember.ArrayController.extend({
  groupByDate: function() {
    var get = Ember.get;
    groupBy = 'date';
    var result = [];
    
    this.get('content').forEach(function(item){
      var hasGroup = !!result.findBy('group', get(item, groupBy));

      if (!hasGroup) {
        result.pushObject(Ember.Object.create({
          group: get(item, groupBy),
          content: []
        }));
      }

      result.findBy('group', get(item, groupBy)).get('content').pushObject(item);
    });
    return result;
  }.property('content.@each.date')
});
