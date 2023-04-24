export const manifest = {
	appDir: "_app",
	appPath: "Gallery/_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.8b70458b.js","imports":["_app/immutable/entry/start.8b70458b.js","_app/immutable/chunks/index.90227162.js","_app/immutable/chunks/singletons.6fc0df0e.js","_app/immutable/chunks/paths.f13db7a3.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.6ef80f35.js","imports":["_app/immutable/entry/app.6ef80f35.js","_app/immutable/chunks/index.90227162.js"],"stylesheets":[],"fonts":[]}},
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
