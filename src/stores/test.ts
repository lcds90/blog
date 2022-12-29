import { defineStore } from 'pinia';

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const testStore = defineStore('test', {
  // arrow function recommended for full type inference
  state: () => ({
    // all these properties will have their type inferred automatically
    counter: 0,
    isAdmin: true,
    name: 'Eduardo',
  }),
});
