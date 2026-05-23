const nextConfig = {
    experimental: {},
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**'
        }
      ]
    }
  };
  
  export default nextConfig;