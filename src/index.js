import React from 'react';
import ReactDOM from 'react-dom/client';

/**Router */
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import App from './App';

/**Apollo Client */
import {
  ApolloProvider,
} from "@apollo/client";
import client from './apollo-client';

/**Style */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ApolloProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
