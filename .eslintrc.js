module.exports = {
  extends: ["next/core-web-vitals", "next/typescript"],
  rules: {
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
  },
}; 