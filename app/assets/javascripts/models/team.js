App.Team = DS.Model.extend({
  name: DS.attr(),
  users: DS.hasMany('users'),
  memberships: DS.hasMany('memberships')
});
