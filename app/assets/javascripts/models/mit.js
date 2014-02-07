App.Mit = DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  createdAt: DS.attr(),
  user: DS.belongsTo('user'),

  date: function(){
    return moment(this.get('createdAt')).format("MM-DD-YYYY");
  }.property('createdAt')
});
