export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* NAVBAR */}
      <nav className="w-full border-b border-neutral-800 px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-500">Pink Cheese</h1>

        <div className="flex gap-8 text-sm text-neutral-300">
          <button className="hover:text-pink-400">Dashboard</button>
          <button className="hover:text-pink-400">Send</button>
          <button className="hover:text-pink-400">Activity</button>
          <button className="hover:text-pink-400">Profile</button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-10">

        {/* BALANCE CARD */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex justify-between items-center">

          <div>
            <p className="text-neutral-400 text-sm">Available Balance</p>
            <h2 className="text-4xl font-bold text-pink-500 mt-2">$420.69</h2>
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-pink-600 rounded-xl hover:bg-pink-500">
              Send Money
            </button>

            <button className="px-6 py-3 border border-neutral-700 rounded-xl hover:border-pink-500">
              Request
            </button>
          </div>

        </div>

        {/* GRID SECTION */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* QUICK SEND */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Send</h3>

            <div className="flex flex-col gap-3">
              <button className="p-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-left">
                Send to Alex
              </button>
              <button className="p-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-left">
                Send to Maya
              </button>
              <button className="p-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-left">
                Send to Jordan
              </button>
            </div>
          </div>

          {/* ACTIVITY */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>

            <div className="flex flex-col gap-3 text-sm text-neutral-300">
              <p>Paid Maya $15</p>
              <p>Received $40 from Jordan</p>
              <p>Sent Alex $10</p>
            </div>
          </div>

        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl">
            <h4 className="font-semibold">Fast Payments</h4>
            <p className="text-neutral-400 text-sm mt-2">
              Send and receive instantly.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl">
            <h4 className="font-semibold">Peer-to-Peer</h4>
            <p className="text-neutral-400 text-sm mt-2">
              Pay anyone securely.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl">
            <h4 className="font-semibold">Secure</h4>
            <p className="text-neutral-400 text-sm mt-2">
              End-to-end encrypted transactions.
            </p>
          </div>

        </div>

      </div>

    </main>
  )
}
