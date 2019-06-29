const withPlugins = require('next-compose-plugins');

const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass');
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const nextRuntimeDotenv = require('next-runtime-dotenv');

const path = require("path");
const fs = require('fs');
const webpack = require('webpack')

const withConfig = nextRuntimeDotenv({
	public: [
		'API_URL'
	]
})

module.exports = withPlugins(
	[
		[withTypescript],
		[withCSS],
		[withSass],
		[withBundleAnalyzer],
		[withConfig]
	],
	{
		analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
		analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
		bundleAnalyzerConfig: {
			server: {
				analyzerMode: 'static',
				reportFilename: '../bundles/server.html'
			},
			browser: {
				analyzerMode: 'static',
				reportFilename: '../bundles/client.html'
			}
		},
		webpack: (config, { dev, isServer }) => {
			if (!isServer) {
				const originalEntry = config.entry;

				config.entry = async () => {
					const entries = await originalEntry()
					if (entries['main.js']) {
						fs.readdirSync('./static/js/').filter(function (file) {
							if (file.match(/.*\.js$/)) {
								if (entries['main.js'].indexOf(path.resolve(__dirname, 'static/js/', file)) === -1) {
									entries['main.js'].push(path.resolve(__dirname, 'static/js/', file))
								}
							}
						});
					}
					return entries
				}
			}


			config.plugins.push(
				new webpack.ProvidePlugin({
					$: "jquery",
					jquery: "jquery",
					"window.jQuery": "jquery",
					jQuery: "jquery"
				})
			)
			config.module.rules.push({
				test: /\.(ttf|eot|woff|woff2)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "/static/fonts/[name].[ext]",
					},
				}
			});

			config.module.rules.push({
				test: /\.(png|jpg|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 50000,
					}
				}
			});


			config.module.rules.push({
				test: /\.(html)$/,
				use: {
					loader: 'html-loader',
					options: {
						limit: 50000,
					}
				}
			});

			return config;
		}
	}
);
