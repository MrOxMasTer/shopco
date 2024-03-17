import createJiti from 'jiti';
import { fileURLToPath } from 'node:url';
const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti we can import .ts files :)
jiti('./src/shared/lib/utils/env.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // esmExternals: true,
    // ppr: true,
    // typedRoutes: true,
    // useLightningcss: true,
    // turbo: {
    //   useSwcCss: true,
    //   // rules - webpack
    // },
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
