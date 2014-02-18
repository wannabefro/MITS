App.MitsIndexController = Ember.ArrayController.extend({
  sortProperties: ['createdAt'],
  sortAscending: false,
  queryParams: ['date'],
  date: null
});
