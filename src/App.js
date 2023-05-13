import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from './auth/auth';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import AppShell from './shell/AppShell';

const App = () => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AppShell>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route element={<NotFound />} />
      </Routes>
    </AppShell>
  );
};

export default App;
