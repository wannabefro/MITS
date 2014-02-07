App.User = DS.Model.extend(Ember.Validations.Mixin, {
  username: DS.attr(),
  mits: DS.hasMany('mit')
});

App.User.reopen({
  validations: {
    username: {
      presence: true,
      length: {minimum: 4}
    },
    email: {
      presence: true,
      format: {with: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, message: 'must be a valid email address'}
    },
    password: {
      presence: true,
      format: {with: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, message: 'must contain at least 1 digit, 1 lower case character and 1 upper case character'},
      length: {minimum:5},
      confirmation: true
    },
    passwordConfirmation: {
      presence: true
    }
  }
});
