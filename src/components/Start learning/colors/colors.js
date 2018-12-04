import React from 'react';
import ReactDOM from 'react-dom';
import AppColors from './AppColors';
import * as serviceWorker from '../../serviceWorker';

ReactDOM.render(<AppColors />, document.getElementById('rainbow'));
serviceWorker.unregister();
