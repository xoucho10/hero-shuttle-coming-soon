export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4 py-10 overflow-hidden">

      {/* Logo - responsive */}
      <div className="w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden shadow-xl animate-bounce-slow">
        <img
          src="/logo.png"
          alt="HERO SHUTTLE & TOURS ZANZIBAR"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Big text - responsive size, no overflow */}
      <div className="mt-8 md:mt-10 w-full overflow-hidden">
        <h1 className="text-[11vw] sm:text-5xl md:text-7xl font-black tracking-tight text-[#0A2342] animate-slide-lr whitespace-nowrap leading-none">
          COMING SOON
        </h1>
      </div>

      {/* Small text - responsive tracking */}
      <div className="w-full overflow-hidden mt-3 px-2">
        <p className="text-[#FF8A00] font-bold tracking-[0.15em] sm:tracking-[0.3em] text-[11px] sm:text-sm animate-slide-rl whitespace-nowrap">
          HERO SHUTTLE & TOURS ZANZIBAR
        </p>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slide-lr {
          0% { transform: translateX(-110%); }
          15% { transform: translateX(0%); }
          75% { transform: translateX(0%); }
          90% { transform: translateX(110%); }
          100% { transform: translateX(110%); }
        }
        @keyframes slide-rl {
          0% { transform: translateX(110%); }
          15% { transform: translateX(0%); }
          75% { transform: translateX(0%); }
          90% { transform: translateX(-110%); }
          100% { transform: translateX(-110%); }
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
        /* Reduce motion on very small screens */
        @media (max-width: 380px) {
         .animate-slide-lr,.animate-slide-rl {
            animation-duration: 6s;
          }
        }
      `}</style>
    </main>
  );
}