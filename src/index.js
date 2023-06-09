import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './Routing';
import 'bootstrap/scss/bootstrap.scss';
import './common.scss';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Routing/>)