App.Mit = DS.Model.extend(Ember.Validations.Mixin, {
  title: DS.attr(),
  body: DS.attr(),
  createdAt: DS.attr(),
  user: DS.belongsTo('user'),
  comments: DS.hasMany('comment'),

  date: function(){
    return moment(this.get('createdAt')).format("MM-DD-YYYY");
  }.property('createdAt'),

});

App.Mit.reopen({
  validations: {
    title: {
      presence: true,
      length: {maximum:128}
    },
    body: {
      length: {maximum: 500}
    }
  }
});
