App.Mit = DS.Model.extend(Ember.Validations.Mixin, {
  title: DS.attr(),
  body: DS.attr(),
  createdAt: DS.attr(),
  user: DS.belongsTo('user'),
  comments: DS.hasMany('comment'),
  tags: DS.hasMany('tag'),
  newTags: DS.attr(),
  tagList: function(){
    tags = this.get('tags').map(function(tag){
      return tag.get('name');
    });
    return tags.join(',');
  }.property('tags.@each'),

  date: function(){
    var niceDate = moment(this.get('createdAt')).format("MM-DD-YYYY");
    if (niceDate === moment().format("MM-DD-YYYY")){
      return 'Today';
    } else {
      return niceDate;
    }
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
