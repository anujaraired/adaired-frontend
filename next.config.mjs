/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone', // ensures runtime build only (optional)
  experimental: {
    // disable static export / enable full SSR
    dynamicIO: true,
    isrFlushToDisk: false,
  },
  generateEtags: false,
  trailingSlash: false,

  // 🔥 turn off static export
  experimental: {
    serverActions: {
      allowedOrigins: ['*'],
    },
  },

  // 🔥 MOST IMPORTANT:
  // DO NOT ALLOW NEXT TO STATIC EXPORT
  // Forces ALL pages to be rendered at runtime
  staticPageGenerationTimeout: 0,
  amp: { canonicalBase: '/' },
  output: undefined,

  // 👇 Keep your existing config
  fetchCache: 'force-no-store',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/api/portraits/**',
      },
      {
        protocol: 'https',
        hostname: 'cloudflare-ipfs.com',
        pathname: '/ipfs/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        pathname: '/redqteam.com/isomorphic-furyroad/public/**',
      },
      {
        protocol: 'https',
        hostname: 'isomorphic-furyroad.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'isomorphic-furyroad.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'demo.adaired.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  async redirects() {
    // const dynamicRedirects = await fetchRedirects();
    return [
      {
        source: '/expert-content-solutions/products/form',
        destination: '/expert-content-solutions/products/website-content/form',
        permanent: true,
      },
      // ...dynamicRedirects, // Spread the dynamic redirects from API
    ];
  },
  reactStrictMode: true,
  transpilePackages: ['core'],
};

export default nextConfig;
