import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// @ts-ignore
const shadowRoot = document.getElementsByTagName("combobox-webcomponent")[0].shadowRoot.getElementById('component-root');
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    shadowRoot
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
