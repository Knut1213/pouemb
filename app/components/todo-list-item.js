import Component from '@ember/component';

export default Component.extend({
  actions: {
    removeItem(todo) {
      this.get('removeItem')(todo);
    }
  }
});
