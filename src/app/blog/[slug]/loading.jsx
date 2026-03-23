export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-[#f4e9ed]">

      <div className="flex flex-col items-center gap-5">

        {/* 🔥 SPINNER (LUXURY MAROON) */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-[#56021F]/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#56021F] border-r-[#3d0116] animate-spin"></div>
        </div>

        {/* 🔥 TEXT */}
        <p className="text-gray-600 text-sm tracking-wide animate-pulse">
          Loading amazing content...
        </p>

      </div>

    </div>
  );
}