module.exports = {
	pages: {
		web: {
			// 入口文件
			entry: './src/web.js',
			// 模板来源
			template: 'public/index.html',
			// 在 dist/index.html 的输出
			filename: 'index.html',
			title: 'PC',
			// 提取出来的通用 chunk 和 vendor chunk。
			chunks: ['chunk-vendors', 'chunk-common', 'web']
		},
		h5: {
			// 入口文件
			entry: './src/h5.js',
			// 模板来源
			template: 'public/index.html',
			// 在 dist/index.html 的输出
			filename: 'h5.html',
			title: 'H5',
			// 提取出来的通用 chunk 和 vendor chunk。
			chunks: ['chunk-vendors', 'chunk-common', 'h5']
		}
	}
}