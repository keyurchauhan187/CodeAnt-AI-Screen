import { StatsCard } from './components/StatsCard';
import { IssuesCard } from './components/IssuesCard';
import { AuthSection } from './components/AuthSection';
import { Logo } from './components/Logo';

export default function App() {
  return (
    <div className="relative min-h-screen flex bg-gray-50">
      {/* Left Section */}
      <div className="hidden lg:flex flex-1 items-center justify-end relative">
        {/* Background Image on Bottom Left */}
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px]"
          style={{
            backgroundImage: "url('Subtract.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Background Logo */}
        <div className="absolute bottom-0 left-0 w-[400px] opacity-10">
          <Logo />
        </div>

        {/* Cards */}
        <div className="relative flex flex-col items-center" style={{ marginRight: '60px' }}>
          {/* StatsCard */}
          <div className="z-10">
            <StatsCard />
          </div>

          {/* Overlapping IssuesCard */}
          <div className="-mt-10 z-20" style={{ marginLeft: '30px' }}>
            <IssuesCard />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 items-center justify-center">
        <AuthSection />
      </div>
    </div>
  );
}
