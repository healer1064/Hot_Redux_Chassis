// @flow

import Loadable from '../Loadable';

export default Loadable({
  loader: () => import('./ContactRoute')
});
