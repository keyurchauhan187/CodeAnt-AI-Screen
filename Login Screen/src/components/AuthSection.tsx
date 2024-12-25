import { useState } from 'react';
import { AuthTabs } from './AuthTabs';
import { SignInButton } from './SignInButton';

export function AuthSection() {
  const [activeTab, setActiveTab] = useState<'saas' | 'self-hosted'>('saas');

  return (
    <div className="w-full max-w-md p-8">
      {/* Logo and Name Section */}
      <div className="flex items-center gap-3 justify-center mb-8">
        <img
          src="Logo.png" // Ensure the path is correct relative to your setup
          alt="CodeAnt AI Logo"
          className="w-10 h-10 object-contain" // Adjust size as needed
        />
        <span className="text-xl font-semibold">CodeAnt AI</span>
      </div>

      {/* Welcome Heading */}
      <h1 className="text-2xl font-semibold text-center mb-8">
        Welcome to CodeAnt AI
      </h1>

      {/* Tabs */}
      <AuthTabs activeTab={activeTab} onChange={setActiveTab} />

      {/* Sign-in Buttons */}
      <div className="mt-6 space-y-3">
        {activeTab === 'saas' ? (
          <>
            <SignInButton provider="Github" />
            <SignInButton provider="Bitbucket" />
            <SignInButton provider="Azure Devops" />
            <SignInButton provider="GitLab" />
          </>
        ) : (
          <>
            <SignInButton provider="Self Hosted GitLab" />
            <SignInButton provider="SSO" />
          </>
        )}
      </div>

      {/* Footer */}
      <p className="text-sm text-gray-500 text-center mt-6">
        By signing up you agree to the{" "}
        <a href="/privacy" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>
      </p>
    </div>
  );
}
