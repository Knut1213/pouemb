import DS from 'ember-data';
import {
  Model
} from 'ember-pouch';

export default Model.extend({
  title: DS.attr('string'),
  priority: DS.attr('number'),
  createdOn: DS.attr('date'),
  dueTo: DS.attr('date')
});
