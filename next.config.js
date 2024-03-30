/**
 * @type {import('next').NextConfig}
 **/
const path = require("path");

const nextConfig = {
  reactStrictMode: true, // react te caga mas a pedos
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  swcMinify: true, // reduce el bundle size
  images: {
    domains: [],
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/, // si el archivo es un svg cargarlo con svgr
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            memo: true,
            dimensions: false,
            svgoConfig: {
              multipass: true,
              plugins: [
                "removeDimensions",
                "removeOffCanvasPaths",
                "reusePaths",
                "removeElementsByAttr",
                "removeStyleElement",
                "removeScriptElement",
                "prefixIds",
                {
                  name: "cleanupNumericValues",
                  params: {
                    floatPrecision: 1,
                  },
                },
                {
                  name: "convertPathData",
                  params: {
                    floatPrecision: 1,
                  },
                },
                {
                  name: "convertTransform",
                  params: {
                    floatPrecision: 1,
                  },
                },
                {
                  name: "cleanupListOfValues",
                  params: {
                    floatPrecision: 1,
                  },
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
  headers: async () => { // cosas de seguridad
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

module.exports = () => {
  const plugins = [];
  return plugins.reduce((acc, plugin) => plugin(acc), {
    ...nextConfig,
  });
};
