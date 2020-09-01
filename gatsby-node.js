exports.onCreateWebpackConfig = (args) => {
  const config = args.getConfig();
  config.module.rules.push({
    test: /\.txt$/i,
    use: "raw-loader",
  });

  args.actions.replaceWebpackConfig(config);
};
