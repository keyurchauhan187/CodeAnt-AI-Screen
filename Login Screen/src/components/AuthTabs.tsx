interface AuthTabsProps {
  activeTab: 'saas' | 'self-hosted';
  onChange: (tab: 'saas' | 'self-hosted') => void;
}

export function AuthTabs({ activeTab, onChange }: AuthTabsProps) {
  return (
    <div className="bg-gray-100 p-1 rounded-xl grid grid-cols-2 gap-1">
      <button
        className={`py-2.5 px-4 rounded-lg transition-colors ${
          activeTab === 'saas'
            ? 'bg-blue-500 text-white'
            : 'hover:bg-gray-200'
        }`}
        onClick={() => onChange('saas')}
      >
        SAAS
      </button>
      <button
        className={`py-2.5 px-4 rounded-lg transition-colors ${
          activeTab === 'self-hosted'
            ? 'bg-blue-500 text-white'
            : 'hover:bg-gray-200'
        }`}
        onClick={() => onChange('self-hosted')}
      >
        Self Hosted
      </button>
    </div>
  );
}