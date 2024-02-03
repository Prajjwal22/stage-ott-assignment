/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media.stage.in',
            port: '',
            pathname: '**',
          },
        ],
      },
    
};

export default nextConfig;
