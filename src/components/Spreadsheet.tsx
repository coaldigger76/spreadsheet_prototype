import React from 'react';
import { Badge } from './ui/Badge';

const rows = [
  {
    job: 'Launch social media campaign for product launch',
    date: '05-12-2024',
    status: 'In-process',
    submitter: 'Aisha Patel',
    url: 'www.aishapatel.com',
    assigned: 'Sophie Choudhury',
    priority: 'Medium',
    due: '20-11-2024',
    value: '6,200,000',
  },
  {
    job: 'Update press kit for company redesign',
    date: '30-10-2024',
    status: 'Need to start',
    submitter: 'Irfan Khan',
    url: 'www.irfankhanprofile.com',
    assigned: 'Tejas Pandey',
    priority: 'High',
    due: '30-10-2024',
    value: '3,500,000',
  },
];

export default function Spreadsheet() {
  return (
    <div className="bg-white border rounded overflow-x-auto text-sm">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-2 border text-left">Job Request</th>
            <th className="p-2 border text-left">Submitted</th>
            <th className="p-2 border text-left">Status</th>
            <th className="p-2 border text-left">Submitter</th>
            <th className="p-2 border text-left">URL</th>
            <th className="p-2 border text-left">Assigned</th>
            <th className="p-2 border text-left">Priority</th>
            <th className="p-2 border text-left">Due Date</th>
            <th className="p-2 border text-left">Est. Value</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="p-2 border truncate">{r.job}</td>
              <td className="p-2 border">{r.date}</td>
              <td className="p-2 border"><Badge label={r.status} /></td>
              <td className="p-2 border">{r.submitter}</td>
              <td className="p-2 border text-blue-600 underline">{r.url}</td>
              <td className="p-2 border">{r.assigned}</td>
              <td className="p-2 border text-yellow-600">{r.priority}</td>
              <td className="p-2 border">{r.due}</td>
              <td className="p-2 border">₹ {r.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}