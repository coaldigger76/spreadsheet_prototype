import React from 'react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = ['All', 'Active', 'Archived'];

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    <div className="flex space-x-4 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded ${tab === activeTab ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => {
            console.log(`Switched to ${tab}`);

            onTabChange(tab);
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}