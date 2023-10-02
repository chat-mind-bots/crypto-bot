/** @type {import('next').NextConfig} */
const nextConfig = { trailingSlash: true, output: "export" };

module.exports = nextConfig;

// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
//
// module.exports = (phase) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return {};
//   }
//
//   return { trailingSlash: true, output: "export" };
// };
