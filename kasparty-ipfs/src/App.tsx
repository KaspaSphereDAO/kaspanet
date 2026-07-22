/*
 * Kaspanet — Copyright (C) 2026 KaspaSphere DAO
 * Free software under the GNU Affero General Public License v3 or later.
 * This program comes with ABSOLUTELY NO WARRANTY. Source: https://github.com/KaspaSphereDAO/kaspanet
 */
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SearchSection from './components/SearchSection'
import TokenLeaderboard from './components/TokenLeaderboard'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-black transition-all duration-500 overflow-x-hidden">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <SearchSection />
      <TokenLeaderboard />
      <Footer />
    </div>
  )
}

export default App