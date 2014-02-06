Ember.TextSupport.reopen({
  classNames: ["form-control"]
});

Ember.EasyForm.Config.registerWrapper('twitter-bootstrap-3', {
  // inputTemplate: 'bootstrap-input',
  formClass: 'form-horizontal',
  fieldErrorClass: 'has-error',
  errorClass: 'help-inline',
  successClass: 'has-success',
  hintClass: 'help-block',
  labelClass: '',
  inputClass: 'form-group',
  wrapControlers: true,
});
