/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      // Enable modern/legacy build for client-side JavaScript
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    // Modern browsers will get ES6+ code
                    targets: { esmodules: true },
                  },
                ],
                // {{ edit_1 }}: Added preset for React
                "@babel/preset-react",
              ],
            },
          },
        ],
      });
    }
    return config;
  },
};

export default nextConfig;
