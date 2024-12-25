import React, { useState } from 'react';
import { Code2, Menu } from 'lucide-react';
import { NavigationItems } from './NavigationItems';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-md"
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="Subtract.png" alt="Logo" height="25" width="25" />
                <h1 className="font-semibold">CodeAnt AI</h1>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-md"
              >
                ×
              </button>
            </div>
          </div>
          <div className="h-[calc(100vh-73px)] overflow-y-auto">
            <NavigationItems className="px-2" />
          </div>
        </div>
      )}
    </div>
  );
}