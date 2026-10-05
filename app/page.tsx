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

      {/* Big text - stops 4s in center then moves */}
      <div className="mt-10 w-full overflow-hidden">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#0A2342] animate-slide-lr whitespace-nowrap">
          COMING SOON
        </h1>
      </div>

      {/* Small text - stops 4s in center then moves */}
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
        /* Total 8s cycle = 1s move in + 4s STOP + 1s move out + 2s reset pause */
        @keyframes slide-lr {
          0% { transform: translateX(-100%); }
          20% { transform: translateX(0%); }
          70% { transform: translateX(0%); } /* STOPS FOR 4 SECONDS HERE */
          85% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes slide-rl {
          0% { transform: translateX(100%); }
          20% { transform: translateX(0%); }
          70% { transform: translateX(0%); } /* STOPS FOR 4 SECONDS HERE */
          85% { transform: translateX(-100%); }
          100% { transform: translateX(-100%); }
        }
      .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      .animate-slide-lr {
          animation: slide-lr 8s ease-in-out infinite;
        }
      .animate-slide-rl {
          animation: slide-rl 8s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}