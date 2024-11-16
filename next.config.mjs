/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'app.sa.ac.th',
          port: '',
          pathname: '/gubguru/pages/registerseller/uploads/Peachoom/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  