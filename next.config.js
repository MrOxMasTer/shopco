/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
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
  // eslint: { ignoreDuringBuilds: true },

  webpack(config) {
    // grab the default rule for handling all images
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );

    config.module.rules = [
      // keep all rules except the default image loader rule
      ...config.module.rules.filter((rule) => rule !== fileLoaderRule),

      // re-add the default image loader rule, but exclude svg
      {
        ...fileLoaderRule,
        exclude: /\.svg$/i,
      },

      // add a new rule for svg files, excluding svg files that are imported as React components
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: {
          ...fileLoaderRule.resourceQuery,
          not: [
            ...fileLoaderRule.resourceQuery.not,
            /icon/, // *.svg?component
          ],
        },
      },

      // add a new rule for svg files that are imported as React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              titleProp: true,
              typescript: true,
              // dimensions: false,
              ext: 'tsx',
              expandProps: 'end',
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
        resourceQuery: /icon/, // *.svg?component
      },
    ];

    return config;
  },
};

module.exports = nextConfig;
