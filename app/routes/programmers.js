import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['DHH', 'Matz', 'Bill Gates', 'Linus Torvalds'];
  }
});
