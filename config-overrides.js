const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const rtlcssLoader = path.resolve(__dirname, 'rtlcss-loader.js');

module.exports = function override(config, env) {

    // Add SASS support
    config.module.rules[1].oneOf.splice(config.module.rules[1].oneOf.length - 1, 0, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', /*rtlcssLoader,*/ 'sass-loader']
    });

    // Fix for flot resize
    config.module.rules[1].oneOf.splice(config.module.rules[1].oneOf.length - 1, 0, {
        test: /jquery\.flot\.resize\.js$/,
        use: 'imports-loader?this=>window'
    });

    // Set globals for external plugins
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.moment': 'moment',
            'moment': 'moment',
            Raphael: 'raphael' // required by morris.js
        })
    ]);

    // Allow cofiguration of router base href
    config.plugins = (config.plugins || []).concat([
        new webpack.DefinePlugin({
            'WP_BASE_HREF': JSON.stringify(process.env.WP_BASE_HREF)
        })
    ]);

    // Enable BundleAnalyzerPlugin
    // config.plugins = (config.plugins || []).concat([
    //     new BundleAnalyzerPlugin()
    // ]);


    return config
}