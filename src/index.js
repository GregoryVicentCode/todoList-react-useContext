import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components/App'
import { TodoProvider } from './components/TodoContext';

import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);

