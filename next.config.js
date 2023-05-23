/** @type {import('next').NextConfig} */
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
};

module.exports = nextConfig;
