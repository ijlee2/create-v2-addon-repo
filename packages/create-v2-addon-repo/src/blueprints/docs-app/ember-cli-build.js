'use strict';

const { compatBuild } = require('@embroider/compat');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

function isProduction() {
  return EmberApp.env() === 'production';
}

module.exports = async function (defaults) {
  const { buildOnce } = await import('@embroider/vite');

  const app = new EmberApp(defaults, {
    'ember-cli-babel': {
      enableTypeScriptTransform: true,
    },

    // Add options here
  });

  const options = {
    packagerOptions: {
      cssLoaderOptions: {
        modules: {
          localIdentName: isProduction()
            ? '[sha512:hash:base64:5]'
            : '[path][name]__[local]',
          mode: (resourcePath) => {
            // We want to enable the local mode only for our own host app.
            // All other addons should be loaded in the global mode.
            const hostAppLocation =
              'docs-app/node_modules/.embroider/rewritten-app';

            return resourcePath.includes(hostAppLocation) ? 'local' : 'global';
          },
        },
        sourceMap: !isProduction(),
      },
      publicAssetURL: '/',
      webpackConfig: {
        module: {
          rules: [
            {
              test: /(node_modules\/\.embroider\/rewritten-app\/)(.*\.css)$/i,
              use: [
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: !isProduction(),
                    postcssOptions: {
                      config: './postcss.config.js',
                    },
                  },
                },
              ],
            },
            /*
              Uncomment this rule to load asset files, e.g. fonts, icons, etc.
              See https://webpack.js.org/guides/asset-modules/ for more information.
            */
            // {
            //   test: /(node_modules\/\.embroider\/rewritten-app\/)(.*\.(ttf|woff))$/,
            //   type: 'asset/resource',
            // },
          ],
        },
      },
    },
    splitAtRoutes: [],
  };

  return require('@embroider/compat').compatBuild(app, buildOnce, options);
};
