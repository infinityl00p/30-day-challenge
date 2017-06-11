import React from 'react';
import ReactDOM from 'react-dom';
//local
import App from './components/30dc/App';
import registerServiceWorker from './registerServiceWorker';
// styles
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
