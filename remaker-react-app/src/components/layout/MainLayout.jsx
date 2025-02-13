import React from 'react';
import { Navbar } from '../common/Navbar';
import { AppRoutes } from '../../routes';
import './MainLayout.css';

export const MainLayout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <footer>
        <p>© 2024 Remakers Studio, All rights reserved</p>
      </footer>
    </div>
  );
};