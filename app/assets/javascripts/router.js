// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.route('index', {path: '/'});
  this.route('register', {path: 'sign_up'});
  // this.resource('posts');
});

App.Router.extend({
  location: 'history'
})
