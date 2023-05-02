// next.config.js
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/pesquisa",
        destination: "/formulario-pesquisa",
        permanent: true,
      },
    ];
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true, // movido para dentro de typescript
  },
};

export default nextConfig;
