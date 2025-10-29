import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // genera /out
  images: { unoptimized: true }, // evita optimizador (requiere Node)
  trailingSlash: true, // mejor para hosting simple (carpetas/)
  reactStrictMode: true,
};

export default nextConfig;
