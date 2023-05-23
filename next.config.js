/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/openApi/:path*",
        destination:
          "http://openapi.nsdi.go.kr/nsdi/eios/service/rest/AdmService/:path*",
      },
    ];
  },
  assetPrefix: !debug ? "https://gimso2x.github.io/geo_chart/" : "",
};

module.exports = nextConfig;
