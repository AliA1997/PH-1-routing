import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
//Import the named export hashRouter object from the react-router-dom library.
import {HashRouter as R} from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<R><App /></R>, document.getElementById('root'));
// registerServiceWorker();
