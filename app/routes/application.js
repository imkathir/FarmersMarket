import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  title(tokens) {
    let tokenString = tokens.reverse().join(' | ');
    if (tokenString) {
      return  `${tokenString} | Zoho Books`;
    }
    return 'Zoho Books';
  },
  router: service()
});
