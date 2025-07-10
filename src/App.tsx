import React from 'react';
import Toolbar from './components/Toolbar';
import Spreadsheet from './components/Spreadsheet';

export default function App() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Toolbar />
      <Spreadsheet />
    </div>
  );
}
