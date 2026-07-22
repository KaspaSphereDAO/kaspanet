/*
 * Kaspanet — Copyright (C) 2026 KaspaSphere DAO
 * Free software under the GNU Affero General Public License v3 or later.
 * This program comes with ABSOLUTELY NO WARRANTY. Source code (AGPL §13):
 * https://github.com/KaspaSphereDAO/kaspanet
 */
const SOURCE_URL = "https://github.com/KaspaSphereDAO/kaspanet"

export default function Footer() {
  return (
    <footer className="py-8 md:py-12 bg-kasgreen text-white text-center">
      <p className="text-base md:text-xl px-4 md:px-0">
        More Content Soon! Brought to you by{" "}
        <a
          href="https://www.modmedianow.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold hover:text-gray-200 transition-colors"
        >
          ModMedia Network™
        </a>
      </p>
      <p className="text-xs md:text-sm px-4 md:px-0 mt-4 opacity-90">
        Kaspanet © 2026 KaspaSphere DAO. No warranty. Free software under AGPLv3 —{" "}
        <a
          href={SOURCE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-200 transition-colors"
        >
          Source code
        </a>
      </p>
    </footer>
  )
}