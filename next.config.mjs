/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export',
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'i.annihil.us',
        port: '',
      },
    ],
  },
};

export default nextConfig;
