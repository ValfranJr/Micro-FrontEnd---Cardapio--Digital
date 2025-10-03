import NextFederationPlugin from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "container-app",
        filename: "static/chunks/remote_entry.js",
        remotes: {
          "micro-cardapio": "micro-cardapio@http://localhost:3001/_next/static/chunks/remote_entry.js",
          "micro-pedido": "micro-pedido@http://localhost:3002/_next/static/chunks/remote_entry.js",
        },
        shared: {
          react: { singleton: true, requiredVersion: false },
          "react-dom": { singleton: true, requiredVersion: false },
        },
      })
    );
    return config;
  },
};

export default nextConfig;
