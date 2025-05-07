import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ResourcesPage from './pages/ResourcesPage';
import SchedulingPage from './pages/SchedulingPage';
import EmergencyPage from './pages/EmergencyPage';
import ContactPage from './pages/ContactPage';
import FeedbackPage from './pages/FeedbackPage';
import ErrorPage from './pages/ErrorPage';
import AdminDashboard from './pages/AdminDashboard';
import SignInPage from './pages/_auth/sign-in';
import SignUpPage from './pages/_auth/sign-up';
import Call from './pages/Call';

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Route>
      
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="schedule" element={<SchedulingPage />} />
        <Route path="emergency" element={<EmergencyPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="feedback" element={<FeedbackPage />} />
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="meeting/:id" element={<Call />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;