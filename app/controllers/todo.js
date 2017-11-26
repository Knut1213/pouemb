import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addItem() {
      let newTodo = this.get('store')
        .createRecord('todo', {
          title: ''
        });

      newTodo.save();
    },
    removeItem(todo) {
      todo.destroyRecord();
    }
  }
});
