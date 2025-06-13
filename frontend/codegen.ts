import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/apollo/documents/**/*.gql",
  documents: ["./src/apollo/documents/**/*.gql"],
  generates: {
    "./src/apollo/__generated__/client/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
    "./src/apollo/__generated__/server/resolvers-types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
