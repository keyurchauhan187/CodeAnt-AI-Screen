import { TrendingUp } from 'lucide-react';

export function IssuesCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-5 ml-12 mt-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-violet-50 rounded-full p-3">
              <div className="w-5 h-5 bg-violet-200 rounded-full" />
            </div>
            <span className="text-gray-600">Issues Fixed</span>
          </div>
          <div className="text-3xl font-bold">500K+</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full">
            <TrendingUp className="w-4 h-4" />
            <span>14%</span>
          </div>
          <span className="text-sm text-gray-500">This week</span>
        </div>
      </div>
    </div>
  );
}