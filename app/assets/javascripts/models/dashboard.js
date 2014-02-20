App.Dashboard = DS.Model.extend({
  teams: DS.hasMany('team'),
  mits: DS.hasMany('mit')
});
