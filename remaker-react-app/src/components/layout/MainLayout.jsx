import React from 'react';
import { Navbar } from '../common/Navbar';
import './MainLayout.css';

export const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <footer>
        <p>© 2024 Remakers Studio, All rights reserved</p>
      </footer>
    </div>
  );
}; 