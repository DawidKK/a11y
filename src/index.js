import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000, undefined, undefined, logger => {
    logger.violations.forEach(({nodes}) => {
      nodes.forEach(({target}) => {
        console.log(`element with issue =>`, target)
        document.querySelector(target).style.border = '3px solid red'
      })
    })
  });
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
