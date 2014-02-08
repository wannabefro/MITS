App.Team = DS.Model.extend(Ember.Validations.Mixin, {
  name: DS.attr(),
  users: DS.hasMany('user'),
  memberships: DS.hasMany('membership'),
  members: function(){
    currentMembers = this.get('memberships').filterBy('state', 'accepted');
    users = currentMembers.map(function(member){
      return member.get('user');
    });
    return users;
  }.property('users.@each', 'memberships.@each'),

  pendingMembers: function(){
    currentMembers = this.get('memberships').filterBy('state', 'pending');
    users = currentMembers.map(function(member){
      return member.get('user');
    });
    return users;
  }.property('users.@each', 'memberships.@each'),

  invites: function(){
    return this.get('memberships').filterBy('state', 'new');
  }.property('memberships.@each')
});

App.Team.reopen({
  validations: {
    name: {
      presence: true,
      length: {minimum: 3}
    }
  }
});
