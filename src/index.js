import React from 'react';
import ReactDOM from 'react-dom/client';
import {unstable_HistoryRouter as BrowserRouter} from 'react-router-dom';

import {history} from './services';

import {App} from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter history={history}>
        <App/>
    </BrowserRouter>
);
