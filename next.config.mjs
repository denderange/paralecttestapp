/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://api.themoviedb.org/3/:path*',
      }
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        port: '',
        hostname: 'image.tmdb.org**',
      },
    ],
  },
};

export default nextConfig;
