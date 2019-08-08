import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Add Moment to the project
import moment from 'moment';

// Set languaje Spanish
import 'moment/locale/es';
moment.locale('es');


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
