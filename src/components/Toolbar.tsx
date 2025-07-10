import React from 'react';
import { Plus, Upload, Download, Search, Filter, EyeOff, ArrowUpAZ } from 'lucide-react';


export default function Toolbar() {
  return (
    <div className="flex flex-wrap justify-between items-center mb-4">
      <div className="flex space-x-2">
        <button className="bg-white px-3 py-1.5 border text-sm rounded shadow-sm">Tool bar »</button>
        <button className="bg-white px-3 py-1.5 border text-sm rounded shadow-sm flex items-center gap-1"><EyeOff size={14} /> Hide fields</button>
        <button className="bg-white px-3 py-1.5 border text-sm rounded shadow-sm flex items-center gap-1"><ArrowUpAZ size={14} /> Sort
</button>
        <button className="bg-white px-3 py-1.5 border text-sm rounded shadow-sm flex items-center gap-1"><Filter size={14} /> Filter</button>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <input type="text" placeholder="Search within sheet" className="pl-8 pr-3 py-1.5 border rounded text-sm shadow-sm" />
          <Search size={14} className="absolute left-2 top-2.5 text-gray-400" />
        </div>
        <button className="bg-white px-3 py-1.5 border text-sm rounded shadow-sm flex items-center gap-1"><Upload size={14} /> Import</button>
        <button className="bg-white px-3 py-1.5 border text-sm rounded shadow-sm flex items-center gap-1"><Download size={14} /> Export
</button>
        <button className="bg-white px-3 py-1.5 border text-sm rounded shadow-sm">Share</button>
        <button className="bg-green-600 text-white px-3 py-1.5 rounded text-sm shadow-sm flex items-center gap-1"><Plus size={14} /> New Action</button>
      </div>
    </div>
  );
}