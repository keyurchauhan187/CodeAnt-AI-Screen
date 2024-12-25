import { KeyRound } from 'lucide-react';

const PROVIDER_ICONS = {
  Github: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  GitLab: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FC6D26">
      <path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 00-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 00-.867 0L1.386 9.45.044 13.587a.924.924 0 00.331 1.023L12 23.054l11.625-8.443a.92.92 0 00.33-1.024"/>
    </svg>
  ),
  Bitbucket: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#2684FF">
      <path d="M.778 1.211a.768.768 0 00-.768.892l3.263 19.811c.084.499.515.867 1.022.872H19.95a.772.772 0 00.77-.644l3.262-20.029a.768.768 0 00-.768-.891L.778 1.211zM14.52 15.528H9.522L8.17 8.464h7.561l-1.211 7.064z"/>
    </svg>
  ),
  'Azure Devops': (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0078D4">
      <path d="M22.48 11.624l-9.216-8.064V3.56L.672 9.912h.048l12.544-1.488v1.488l9.216 1.712zm-9.216 2.016v6.816L1.728 14.088l11.536 5.28V13.64l9.216-1.712v-.048l-9.216 1.76z"/>
    </svg>
  ),
  'Self Hosted GitLab': (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FC6D26">
      <path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 00-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 00-.867 0L1.386 9.45.044 13.587a.924.924 0 00.331 1.023L12 23.054l11.625-8.443a.92.92 0 00.33-1.024"/>
    </svg>
  ),
  SSO: <KeyRound className="w-6 h-6" />,
};

interface SignInButtonProps {
  provider: keyof typeof PROVIDER_ICONS;
}

export function SignInButton({ provider }: SignInButtonProps) {
  return (
    <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
      {PROVIDER_ICONS[provider]}
      <span className="text-center">Sign in with {provider}</span>
    </button>
  );
}
