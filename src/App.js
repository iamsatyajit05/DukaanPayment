import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import PaymentPage from './pages/Payment';

export default function App() {
  return (
    <Router>
      <main className='flex'>
        <Sidebar />
        <Routes>
          <Route path="/payments" element={<PaymentPage />} />
        </Routes>
      </main>
    </Router>
  )
}