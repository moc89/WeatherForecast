module.exports = {
  jest: {
    transformIgnorePatterns: ["/node_modules/(?!axios).+\\.js$"],
    automock: false,
    setupFiles: ["./setupJest.js"],
    testRegex: "(/__tests__/).+.test.js$",
    testEnvironment: "node",
  },
  moduleNameMapper: {
    axios: "axios/dist/node/axios.cjs",
  },
};
