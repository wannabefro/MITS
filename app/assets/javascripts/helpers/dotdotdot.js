Ember.Handlebars.helper('dotdotdot', function(str) {
  if (str.length > 100)
    return str.substring(0,100) + '...';
  return str;
});
