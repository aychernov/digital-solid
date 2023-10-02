import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid({ ssr: false })],
  server: {
    port: 3000,  // exposed docker image port
    host: true,
    hmr: {
      port: 3000, // exposed docker image port
      clientPort: 3000, // mapped docker container port
    },
    watch:{
      usePolling: true
    }
  },
});
