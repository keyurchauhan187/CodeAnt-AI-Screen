import React from 'react';
import { Code2, Cloud, HelpCircle, Settings, Phone, LogOut } from 'lucide-react';
import { UserDropdown } from './UserDropdown';

interface NavigationItemsProps {
  className?: string;
}

export function NavigationItems({ className }: NavigationItemsProps) {
  return (
    <div className={className}>
      <div className="p-2">
        <UserDropdown />
      </div>
      <nav className="flex-1 p-2">
        <div className="space-y-1">
          <button
            className="w-full flex items-center px-3 py-2 text-sm rounded-md bg-blue-50 text-blue-600 hover:bg-blue-50 hover:text-blue-600"
          >
            <Code2 className="mr-2 h-4 w-4" />
            Repositories
          </button>
          <button className="w-full flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100">
            <Code2 className="mr-2 h-4 w-4" />
            AI Code Review
          </button>
          <button className="w-full flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100">
            <Cloud className="mr-2 h-4 w-4" />
            Cloud Security
          </button>
          <button className="w-full flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100">
            <HelpCircle className="mr-2 h-4 w-4" />
            How to Use
          </button>
          <button className="w-full flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </button>
        </div>
      </nav>

      <div className="border-t p-2 mt-auto">
        <div className="space-y-1">
          <button className="w-full flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100">
            <Phone className="mr-2 h-4 w-4" />
            Support
          </button>
          <button className="w-full flex items-center px-3 py-2 text-sm rounded-md text-red-600 hover:text-red-600 hover:bg-red-50">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}