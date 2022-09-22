import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "react-bootstrap/esm/ThemeProvider";
import { store } from './app/store';
import App from './App';
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "../src/assetes/css/style.css";


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider dir="rtl">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

