import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes all built asset URLs relative, which is required for IPFS —
// the site must work when served from any path (gateway /ipfs/CID/, .kas client, etc.)
export default defineConfig({
  base: './',
  plugins: [react()],
})
