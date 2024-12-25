import React from 'react';
import { NavigationItems } from './NavigationItems';

export default function Sidebar() {
  return (
    <div className="hidden md:flex w-64 border-r bg-gray-50/40 flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <img src="Subtract.png" alt="Logo" height="25" width="25" />
          <h1 className="font-semibold">CodeAnt AI</h1>
        </div>
      </div>
      <NavigationItems className="flex-1 flex flex-col" />
    </div>
  );
}