module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // Your TypeScript files extension
      parserOptions: {
        project: ["./tsconfig.json"], // Specify it only for TypeScript files
      },
    },
  ],
  rules: {
    "max-len": [
      "error",
      {
        code: 100,
      },
    ],
    "no-console": 1,
    "no-extra-boolean-cast": 0,
    "@typescript-eslint/restrict-plus-operands": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-floating-promises": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/no-unsafe-assignment": 0,
  },
};
