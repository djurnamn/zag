import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  // Reachable from CodeSandbox's preview proxy
  server: { host: true, port: 5173, allowedHosts: [".csb.app"] },
})
