// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.route('index', {path: '/'});
  this.route('register', {path: 'sign_up'});
  this.resource('mits', function(){
    this.route('index', {path: '/'});
    this.route('new');
    this.route('show', {path: ':mit_id'});
  });
});

App.Router.extend({
  location: 'history'
})
