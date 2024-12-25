import React from 'react';
import { Search } from 'lucide-react';
import Sidebar from './components/Sidebar';
import RepositoryList from './components/RepositoryList';
import { MobileNav } from './components/MobileNav';

function App() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="border-b">
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MobileNav />
                <div>
                  <h1 className="text-xl font-semibold">Repositories</h1>
                  <p className="text-sm text-muted-foreground">33 total repositories</p>
                </div>
              </div>
              <div className="hidden md:flex gap-2">
                <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
                  Refresh All
                </button>
                <button className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white">
                  Add Repository
                </button>
              </div>
            </div>
            <div className="md:hidden flex gap-2">
              <button className="flex-1 px-4 py-2 border rounded-md hover:bg-gray-50">
                Refresh All
              </button>
              <button className="flex-1 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white">
                Add Repository
              </button>
            </div>
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input 
                placeholder="Search Repositories" 
                className="pl-9 w-full border rounded-md p-2 border-gray-200"
              />
            </div>
          </div>
        </div>
        
        <div className="divide-y border-b border-gray-200">
          <RepositoryList />
        </div>
      </main>
    </div>
  );
}

export default App;