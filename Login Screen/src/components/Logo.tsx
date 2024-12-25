export function Logo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 240 240" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M120 0C53.726 0 0 53.726 0 120s53.726 120 120 120 120-53.726 120-120S186.274 0 120 0zm0 216c-53.019 0-96-42.981-96-96s42.981-96 96-96 96 42.981 96 96-42.981 96-96 96z" fill="#D3D3D3"/>
    </svg>
  );
}