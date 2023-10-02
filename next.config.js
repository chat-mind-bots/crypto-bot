/** @type {import('next').NextConfig} */
const nextConfig = { output: "export" };

/** @type {import('next').NextConfig} */
const devNextConfig = {};

module.exports = process.env.MODE === "DEVELOP" ? devNextConfig : nextConfig;
