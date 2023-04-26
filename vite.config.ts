import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	// resolve: {
	// 	alias: {
	// 		components: '/src/components',
	// 		templates: '/src/templates',
	// 		layouts: '/src/layouts',
	// 		common: '/src/common',
	// 		assets: '/src/assets',
	// 		hooks: '/src/hooks',
	// 		types: '/src/types',
	// 		pages: '/src/pages',
	// 		store: '/src/store',
	// 		redux: '/src/redux',
	// 		libs: '/src/libs',
	// 		api: '/src/api',
	// 	},
	// },
});
