export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-5xl md:text-7xl font-extrabold text-pink-500 neon-glow text-center">
        Pink Cheese
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-300 text-center max-w-xl">
        Send money. Spark confidence.
      </p>

      <button className="mt-10 px-8 py-4 bg-pink-600 rounded-full text-lg font-semibold hover:bg-pink-500 transition-all neon-button">
        💖 Send Pink
      </button>

    </main>
  );
}
