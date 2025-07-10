import React from 'react';

interface Props {
  label: string;
}

export const Badge = ({ label }: Props) => {
  const colorMap: Record<string, string> = {
    'In-process': 'bg-yellow-100 text-yellow-800',
    'Need to start': 'bg-blue-100 text-blue-800',
    'Complete': 'bg-green-100 text-green-800',
    'Blocked': 'bg-red-100 text-red-800',
  };

  return (
    <span className={`text-xs px-2 py-1 rounded-full font-medium ${colorMap[label] || 'bg-gray-100 text-gray-800'}`}>
      {label}
    </span>
  );
};
