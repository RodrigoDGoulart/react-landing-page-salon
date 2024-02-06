import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faSprayCanSparkles, 
  faSpa,
  faSeedling, 
  faScissors, 
  faUserTie, 
  faGem, 
  faChartLine, 
  faHandSparkles, 
  faEyeDropper
} from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(
  faSprayCanSparkles, 
  faSpa, 
  faSeedling, 
  faScissors, 
  faUserTie, 
  faGem, 
  faChartLine, 
  faHandSparkles, 
  faEyeDropper,
  faYoutube
  )

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
