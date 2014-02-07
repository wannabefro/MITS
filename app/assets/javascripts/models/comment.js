App.Comment = DS.Model.extend(Ember.Validations.Mixin, {
  body: DS.attr(),
  createdAt: DS.attr(),
  user: DS.belongsTo('user'),
  mit: DS.belongsTo('mit')
});
