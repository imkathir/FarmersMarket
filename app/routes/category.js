import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    let arr = [
      { name:'Vegetables', route: 'vegetables' },
      { name:'Birds', route: 'birds' },
      { name:'Cow', route: 'animals' },
      { name:'Goat', route: 'goats' },
      { name:'Word\'s length', route: 'wordlength' },
      { name:'Tools' }
    ];
    // eslint-disable-next-line no-console
    console.log(arr.filterBy('route1'));
    return arr.filterBy('route');
  }
});
