/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/sign-in",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
