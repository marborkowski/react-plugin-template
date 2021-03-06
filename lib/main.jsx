import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlugin from './plugin/index.jsx';

const MyApp = () => <ReactPlugin />;
const mountNode = document.createElement('div');

document.body.appendChild(mountNode);

ReactDOM.render(<MyApp />, mountNode);
