module.exports = {
	// Example setup for your project:
	// The entry module that requires or imports the rest of your project.
	// Must start with `./`!
  entry: './source/patient-signup.js',
  entry: './source/patient-login.js',
	// Place output files in `./dist/my-app.js`
	output: {
		path: __dirname + '/dist',
		filename: 'app.js',
	},
	module: {
		rules: [
			{
				test: /\.json$/,
				loader: 'json-loader',
			},
		],
	},
};