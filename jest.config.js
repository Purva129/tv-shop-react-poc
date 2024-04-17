// {
//   transformIgnorePattern: ["<rootDir>/node_modules/(?!axios)/"];
// }
module.exports = {
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/styleMock.js",
    "^axios$": require.resolve("axios"),
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!axios)/"],
  testEnvironment: "jsdom",
  // setupFilesAfterEnv: ["@testing-library/react/cleanup-after-each"],
};
