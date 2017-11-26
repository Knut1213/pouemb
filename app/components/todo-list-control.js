import Component from '@ember/component';
import Ember from 'ember';

const {
  get,
  inject
} = Ember;

export default Component.extend({
  keyManager: inject.service(),

  didInsertElement() {
    get(this, 'keyManager').register({
      keys: ['numpadAdd'],
      name: 'addItem',
      downCallback: Ember.run.bind(this, function() {
        this.send('addItem');
      })
    });
  },
  willDestroyElement() {
    get(this, 'keyManager').deregister({
      name: 'addItem'
    })
  },
  actions: {
    addItem() {
      this.get('addItem')();
    }
  }
});
