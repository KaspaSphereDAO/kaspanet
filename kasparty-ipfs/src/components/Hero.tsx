/*
 * Kaspanet — Copyright (C) 2026 KaspaSphere DAO
 * Free software under the GNU Affero General Public License v3 or later.
 * This program comes with ABSOLUTELY NO WARRANTY. Source: https://github.com/KaspaSphereDAO/kaspanet
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-800 via-blue-700 to-kasgreen text-white py-16 md:py-32">
      <style>{`
        @keyframes heroRise { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: none; } }
        @keyframes heroFade { from { opacity: 0; } to { opacity: 1; } }
        .hero-rise { animation: heroRise 1s ease-out both; }
        .hero-fade { animation: heroFade 1s ease-out 0.5s both; }
      `}</style>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="hero-rise text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 md:mb-6 leading-snug md:leading-tight">
          Kaspanet
        </h2>
        <p className="hero-fade text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-8 md:mb-12 px-4 sm:px-0">
          Your Home for Learning What's HOT on the Most Secure, Efficient Cryptocurrency on Earth! No PhD Needed.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => window.open('https://kasware.xyz', '_blank')}
            className="bg-white text-kasgreen px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full text-sm sm:text-base md:text-xl font-bold shadow-2xl hover:shadow-kasgreen/50 hover:scale-105 active:scale-95 transition"
          >
            Android/PC Kaspa Wallet
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-t from-gray-100 dark:from-gray-900 to-transparent"></div>
    </section>
  )
}