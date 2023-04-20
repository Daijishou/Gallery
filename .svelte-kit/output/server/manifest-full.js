export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.d97e4160.js","imports":["_app/immutable/entry/start.d97e4160.js","_app/immutable/chunks/index.2fe21cc9.js","_app/immutable/chunks/singletons.da080ca8.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.dfac5875.js","imports":["_app/immutable/entry/app.dfac5875.js","_app/immutable/chunks/index.2fe21cc9.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/wallpapers_pack",
				pattern: /^\/wallpapers_pack\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
