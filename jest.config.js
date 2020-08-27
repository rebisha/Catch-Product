// __mocks__/fileMock.js
module.exports = "test-file-stub";

module.exports = {
  clearMocks: true,
  collectCoverageFrom: ["src/**/*.{js, jsx}"],
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  setupFiles: ["<rootDir>/enzyme.config.js"],
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  testURL: "http://localhost",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  verbose: false,
};
