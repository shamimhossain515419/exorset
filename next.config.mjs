/** @type {import('next').NextConfig} */
const nextConfig = {
   env: {
     BASE_URL: "https://www.exorset.com",
   },
 
   images: {
     remotePatterns: [
       {
         protocol: "https",
         hostname: "**",
       },
     ],
   },
 };
 
 export default nextConfig;
 