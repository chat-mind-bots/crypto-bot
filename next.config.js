// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = () => {
  // if (phase === PHASE_DEVELOPMENT_SERVER) {
  //   return {};
  // }

  return { trailingSlash: true, output: "export" };
};
