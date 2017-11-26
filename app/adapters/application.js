import {
  Adapter
} from 'ember-pouch';
import PouchDB from 'pouchdb';

function createDb() {
  let localDb = 'pouemb';
  let db = new PouchDB(localDb);

  // PouchDB.debug.enable('*');

  return db;
}

export default Adapter.extend({
  init() {
    this._super(...arguments);
    this.set('db', createDb());
  }
});
