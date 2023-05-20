module.exports = {
  experimental: {
    swcPlugins: [
      [
        '@graphql-codegen/client-preset-swc-plugin',
        { artifactDirectory: './gql', gqlTagName: 'graphql' },
      ],
    ],
  },
};
