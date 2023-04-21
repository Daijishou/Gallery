export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.2bb92119.js","imports":["_app/immutable/entry/start.2bb92119.js","_app/immutable/chunks/index.90227162.js","_app/immutable/chunks/singletons.6695e24f.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.43b7a81c.js","imports":["_app/immutable/entry/app.43b7a81c.js","_app/immutable/chunks/index.90227162.js"],"stylesheets":[],"fonts":[]}},
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
