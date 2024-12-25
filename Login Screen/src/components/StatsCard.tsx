
export function StatsCard() {
  return (
    <div> <div className="bg-white rounded-3xl shadow-lg  p-6">
      <div className="flex items-center gap-3 mb-6">

        <img
          src="Logo.png" // Ensure the path is correct relative to your setup
          alt="CodeAnt AI Logo"
          className="w-8 h-8 object-contain" // Adjust size as needed
        />
        <h2 className="text-lg font-semibold">AI to Detect & Autofix Bad Code</h2>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <Stat value="30+" label="Language Support" />
        <Stat value="10K+" label="Developers" />
        <Stat value="100K+" label="Hours Saved" />
      </div>
    </div>

    </div>

  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
    </div>
  );
}
