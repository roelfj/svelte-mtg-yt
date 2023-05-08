import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.f49e06fc.js","app":"_app/immutable/entry/app.8d884a0a.js","imports":["_app/immutable/entry/start.f49e06fc.js","_app/immutable/chunks/index.614015f5.js","_app/immutable/chunks/singletons.0471b0f3.js","_app/immutable/entry/app.8d884a0a.js","_app/immutable/chunks/index.614015f5.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
