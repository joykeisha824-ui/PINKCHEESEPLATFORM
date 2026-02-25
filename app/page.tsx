export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">

      {/* HERO SECTION */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-pink-500 neon-glow text-center">
        Pink Cheese
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-300 text-center max-w-xl">
        Send money. Spark confidence.
      </p>

      <button className="mt-10 px-8 py-4 bg-pink-600 rounded-full text-lg font-semibold hover:bg-pink-500 transition-all neon-button">
        💖 Send Pink
      </button>

      {/* FLOATING APP CARD */}
      <div className="mt-16 w-full max-w-sm p-6 bg-black/80 backdrop-blur-md rounded-3xl shadow-[0_0_40px_#ff1493] border border-pink-500 text-center text-white">
        <p className="text-gray-300 text-sm">Available Balance</p>
        <h2 className="text-3xl font-bold text-pink-500 mt-2 neon-glow">$420.69</h2>
        <button className="mt-6 px-6 py-3 bg-pink-600 rounded-full font-semibold hover:bg-pink-500 transition-all neon-button">
          💖 Send Money
        </button>
      </div>

      {/* EXTRA SPARKLE SECTION */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-pink-500 rounded-full animate-pulse opacity-70"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute bottom-20 left-24 w-3 h-3 bg-pink-300 rounded-full animate-pulse opacity-50"></div>
   <div className="absolute bottom-20 right-24 w-3 h-3 bg-pink-300 rounded-full animate-pulse opacity-50"></div>    
    </main>
  );
}
