import Component from '@ember/component';
import { computed } from '@ember/object';
export default Component.extend({
tagName: '',
model: computed( function() {
  return [
    { name:'Vegetables', route: 'vegetables' },
    { name:'Birds', route: 'birds' },
    { name:'Cow', route: 'animals' },
    { name:'Goat', route: 'goats' },
  ];
})
});
