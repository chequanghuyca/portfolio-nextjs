import type { NextConfig } from 'next';
import AutoImport from 'unplugin-auto-import/webpack';

const nextConfig: NextConfig = {
	reactStrictMode: false,
	images: {
		unoptimized: true,
	},
	output: 'export',
	webpack: (config) => {
		config.plugins.push(
			AutoImport({
				imports: ['react'],
				dts: './auto-imports.d.ts',
				include: [/\.[tj]sx?$/, /\.ts$/],
				dirs: ['./src/hooks', './src/utils'],
				eslintrc: {
					enabled: true,
					filepath: './.eslintrc-auto-import.json',
				},
				defaultExportByFilename: false,
			}),
		);
		return config;
	},
};

export default nextConfig;
