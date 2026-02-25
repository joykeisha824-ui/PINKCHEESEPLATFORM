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

      {/* FEATURES SECTION */}
{/* FEATURES SECTION */}
<section className="mt-24 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
  
  {/* Feature 1: Fast Payments */}
  <div className="p-6 bg-black/70 backdrop-blur-md rounded-2xl shadow-[0_0_30px_#ff1493] border border-pink-500 hover:scale-105 transition-transform">
    <div className="w-12 h-12 mx-auto mb-4 neon-glow flex items-center justify-center">
      {/* Lightning SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    <h3 className="text-lg font-bold text-white mb-2">Fast Payments</h3>
    <p className="text-gray-300 text-sm">Send and receive money instantly with Pink Cheese.</p>
  </div>

  {/* Feature 2: Peer-to-Peer */}
  <div className="p-6 bg-black/70 backdrop-blur-md rounded-2xl shadow-[0_0_30px_#ff1493] border border-pink-500 hover:scale-105 transition-transform">
    <div className="w-12 h-12 mx-auto mb-4 neon-glow flex items-center justify-center">
      {/* Chat Bubble SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 5-5 9-11 9a11 11 0 01-5-1.2L3 21l1.2-3A11 11 0 013 12c0-5 5-9 11-9s11 4 11 9z" />
      </svg>
    </div>
    <h3 className="text-lg font-bold text-white mb-2">Peer-to-Peer</h3>
    <p className="text-gray-300 text-sm">Send money directly to friends, family, or anyone you trust.</p>
  </div>

  {/* Feature 3: Secure & Trusted */}
  <div className="p-6 bg-black/70 backdrop-blur-md rounded-2xl shadow-[0_0_30px_#ff1493] border border-pink-500 hover:scale-105 transition-transform">
    <div className="w-12 h-12 mx-auto mb-4 neon-glow flex items-center justify-center">
      {/* Lock SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c-1.104 0-2 .896-2 2v2h4v-2c0-1.104-.896-2-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 11V8a6 6 0 1112 0v3" />
        <rect x="6" y="11" width="12" height="10" rx="2" ry="2" />
      </svg>
    </div>
    <h3 className="text-lg font-bold text-white mb-2">Secure & Trusted</h3>
    <p className="text-gray-300 text-sm">Your transactions are safe with end-to-end encryption.</p>
  </div>

</section>
