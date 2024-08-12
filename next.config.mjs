/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "nitjsr.ac.in",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cozy-captain-963d285ad5.media.strapiapp.com",
        port: "",
        pathname: "/**",
      },
      // {
      //   protocol: "https",
      //   hostname: "www.mccmdclinic.org",
      //   port: "",
      //   pathname: "/**",
      // },
    ],
  },
};

export default nextConfig;
