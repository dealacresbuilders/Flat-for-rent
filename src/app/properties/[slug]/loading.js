// app/properties/[slug]/loading.js

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#f4e9ed]">
      
      <div className="flex flex-col items-center gap-6">

        {/* Premium Dual Ring Spinner */}
        <div className="relative w-16 h-16">

          {/* Outer Soft Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-[#56021F]/20"></div>

          {/* Spinning Brand Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#56021F] border-r-[#3d0116] animate-spin"></div>

          {/* Inner Glow Dot */}
          <div className="absolute inset-4 bg-[#56021F] rounded-full animate-pulse shadow-lg shadow-[#56021F]/40"></div>

        </div>

        {/* Main Text */}
        <p className="text-[#56021F] font-semibold text-lg tracking-wide">
          Loading Rental Property Details...
        </p>

        {/* Sub Text */}
        <p className="text-sm text-gray-500 text-center max-w-xs">
          Please wait while we fetch complete rental information and availability for you.
        </p>

      </div>
    </div>
  );
}