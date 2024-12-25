import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-2 py-1 text-sm border rounded-md border-gray-200 hover:bg-gray-50"
      >
        UtkarshDhairyaPanwar
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1 bg-white border rounded-md border-gray-200 shadow-lg">
          <button className="w-full px-2 py-1.5 text-sm text-left hover:bg-gray-50">
            Personal Account
          </button>
          <button className="w-full px-2 py-1.5 text-sm text-left hover:bg-gray-50">
            Organization 1
          </button>
          <button className="w-full px-2 py-1.5 text-sm text-left hover:bg-gray-50">
            Organization 2
          </button>
        </div>
      )}
    </div>
  );
}