import React from 'react';
import ReactDOM from 'react-dom/client';
import Customers from 'components/Customers';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <React.Fragment>
    <h1>Hello World</h1>
    <Customers />
  </React.Fragment>
);

// Old school way of doing it...
// ReactDOM.render(<App />, document.getElementById('root'));
// Concurrent React (> v18)
ReactDOM.createRoot(document.getElementById('root')).render(<App />);