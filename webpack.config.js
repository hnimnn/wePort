// webpack.config.js

module.exports = {
    // ... other configuration options
  
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        // ... other rules
      ],
    },
  };
  