import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import PropertyDetailPage from './pages/PropertyDetailPage';
import './index.css';

createRoot(document.getElementById('root')!).render(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/property/:id" element={<PropertyDetailPage />} />
      </Routes>
    </BrowserRouter>

);
