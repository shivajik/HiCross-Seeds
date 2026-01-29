import { vercelPreset } from "@vercel/react-router/vite";
import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  serverBuildFile: "index.js",
  future: {
    unstable_optimizeDeps: true,
  },
  presets: [vercelPreset()],
} satisfies Config;
