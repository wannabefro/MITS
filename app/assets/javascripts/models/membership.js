App.Membership = DS.Model.extend({
  state: DS.attr(),
  user: DS.belongsTo('user'),
  team: DS.belongsTo('team'),
  admin: DS.attr('boolean', {defaultValue: false})
});
