import React from 'react';
import { Route, Routes } from "react-router-dom";
import IndexDashboard from './components/dashboard';
import Layout from "./components/layout/Layout";
import Orders from './components/Orders';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<IndexDashboard />} />
        <Route path="orders" element={<Orders />} />
        </Routes>
    </Layout>
  );
}

export default App;
