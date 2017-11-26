// import Ember from '@ember';
import Route from '@ember/routing/route';
// import Ember from 'ember';

// const {
//   get,
//   inject,
// } = Ember;

export default Route.extend({
  // keyManager: inject.service(),
  //
  // beforeModel() {
  //   get(this, 'keyManager').register({
  //     keys: ['numpadAdd'],
  //     name: 'addItem',
  //     downCallback: Ember.run.bind(this, function() {
  //       this.send('addItem');
  //     }),
  //     priority: 10
  //   })
  // },
  model() {
    return this.get('store').findAll('todo');
  }
  // actions: {
  //   addItem() {
  //     let newTodo = this.get('store')
  //       .createRecord('todo', {
  //         title: 'bla'
  //       });
  //
  //     newTodo.save();
  //   }
  // }
});
