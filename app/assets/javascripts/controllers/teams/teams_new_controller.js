App.TeamsNewController = Ember.ObjectController.extend({
  valid: false,
  isValid: function(){
    var that = this;
    this.get('content').validate().then(function(){
      valid = that.get('content.isValid');
      that.set('valid', valid);
    }, function(){
      valid = that.get('content.isValid');
      that.set('valid', valid);
    })
    return this.get('valid');
  }.property('name')
});
