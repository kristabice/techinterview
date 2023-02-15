import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './App.scss';
import App from './App';
import Nav from './common/Nav'
import reportWebVitals from './reportWebVitals';
import { LoginProvider } from './context/LoginContext';
import Orders from './components/Orders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sign-in",
    element: <p>sign-in</p>
  },
  {
    path: "/orders",
    element: <Orders />
  },
  {
    path: "/admin",
    element: <Orders />
  },
  {
    element: <Nav />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <RouterProvider router={router} /> 
    </LoginProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
