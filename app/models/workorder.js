import DS from 'ember-data';

export default DS.Model.extend({
  source:DS.attr('string'),
  product:DS.attr('string'),
  originalquantity:DS.attr('string'),
  currentquantity:DS.attr('string'),
  date:DS.attr('string')
});
