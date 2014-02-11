App.MitsNewController = Ember.ObjectController.extend({
  editing: false,
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
  }.property('title', 'body')
});
