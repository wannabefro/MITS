// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.route('index', {path: '/'});
  this.route('register', {path: 'sign_up'});
  this.resource('mits', function(){
    this.resource('mit', {path: ':mit_id'}, function(){
      this.resource('comment', function(){
        this.route('new', {path: '/'});
      });
    });
    this.route('index', {path: '/'});
    this.route('new');
    this.route('edit', {path: '/:mit_id/edit'});
  });
  this.resource('teams', function(){
    this.route('index', {path: '/'});
    this.route('new');
  });
});

App.Router.extend({
  location: 'history'
})
