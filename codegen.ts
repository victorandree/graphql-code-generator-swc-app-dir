import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'schema.graphql',
  documents: 'app/**/*.tsx',
  generates: {
    'gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
