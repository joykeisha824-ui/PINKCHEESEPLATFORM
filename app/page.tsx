export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-6">

      {/* GLITTER GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ff1493,#000)] opacity-40"></div>

      {/* SPARKLES */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-pink-300 rounded-full sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* HERO TITLE */}
      <h1 className="text-6xl md:text-8xl font-extrabold text-pink-500 drop-shadow-[0_0_25px_#ff1493] text-center z-10">
        Pink Cheese
      </h1>

      <p className="mt-6 text-lg text-pink-200 text-center max-w-xl z-10">
        Send money. Spark confidence. 💖
      </p>

      {/* BUTTONS */}
      <div className="flex gap-6 mt-10 z-10">

        <button className="px-8 py-4 rounded-full bg-pink-600 text-lg font-bold shadow-[0_0_25px_#ff1493] hover:scale-105 hover:bg-pink-500 transition-all">
          💖 Send Pink
        </button>

        <button className="px-8 py-4 rounded-full border border-pink-500 text-pink-300 hover:bg-pink-600/20 transition-all">
          ✨ Learn More
        </button>

      </div>

      {/* FLOATING GLASS CARD */}
      <div className="mt-16 w-full max-w-md p-8 rounded-3xl backdrop-blur-xl bg-pink-500/10 border border-pink-400 shadow-[0_0_40px_#ff1493] text-center z-10">

        <p className="text-pink-200 text-sm">Your Wallet</p>

        <h2 className="text-4xl font-bold text-pink-400 mt-2 drop-shadow-[0_0_20px_#ff1493]">
          $420.69
        </h2>

        <button className="mt-6 px-6 py-3 rounded-full bg-pink-600 shadow-[0_0_20px_#ff1493] hover:bg-pink-500 transition-all">
          Send Money 💸
        </button>

      </div>

    </main>
  )
}
