/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
        return [
            {
                // matching all API routes
                source: "/.well-known/nostr.json",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "*" },
                ]
            }
        ]
    }
}

module.exports = nextConfig
