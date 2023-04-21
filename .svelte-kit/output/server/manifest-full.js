export const manifest = {
	appDir: "_app",
	appPath: "Gallery/_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.22f3c962.js","imports":["_app/immutable/entry/start.22f3c962.js","_app/immutable/chunks/index.90227162.js","_app/immutable/chunks/singletons.c8b1fc8a.js","_app/immutable/chunks/paths.f395b68f.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.1da1bcad.js","imports":["_app/immutable/entry/app.1da1bcad.js","_app/immutable/chunks/index.90227162.js"],"stylesheets":[],"fonts":[]}},
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
