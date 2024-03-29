module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            /**
             * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `~folder/[..]` path
             */
            components: './src/components',
            src: './src',
          },
          extensions: [
            '.js',
            '.jsx',
            '.json',
            '.tsx',
            '.ts',
          ],
        },
      ],
    ],
  };
};
