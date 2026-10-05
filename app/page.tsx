export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center text-center p-6 overflow-hidden">

      {/* Logo bounce continually */}
      <div className="w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden shadow-xl animate-bounce-slow">
        <img
          src="/logo.png"
          alt="HERO SHUTTLE & TOURS ZANZIBAR"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Big text move left to right */}
      <div className="mt-10 w-full overflow-hidden">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#0A2342] animate-slide-lr whitespace-nowrap">
          COMING SOON
        </h1>
      </div>

      {/* Small text move right to left */}
      <div className="w-full overflow-hidden mt-3">
        <p className="text-[#FF8A00] font-bold tracking-[0.3em] text-sm animate-slide-rl whitespace-nowrap">
          HERO SHUTTLE & TOURS ZANZIBAR
        </p>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
        @keyframes slide-lr {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
        @keyframes slide-rl {
          0% { transform: translateX(100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
       .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
       .animate-slide-lr {
          animation: slide-lr 4s ease-in-out infinite;
        }
       .animate-slide-rl {
          animation: slide-rl 4s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}