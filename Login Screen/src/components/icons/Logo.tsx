interface LogoProps {
  className?: string;
}

export function Logo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg 
      className={className}
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 25.2c-6.216 0-11.2-4.984-11.2-11.2S9.784 4.8 16 4.8s11.2 4.984 11.2 11.2-4.984 11.2-11.2 11.2z" fill="currentColor"/>
    </svg>
  );
}