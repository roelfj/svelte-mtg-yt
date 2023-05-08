import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.b8b92515.js","app":"_app/immutable/entry/app.f5867086.js","imports":["_app/immutable/entry/start.b8b92515.js","_app/immutable/chunks/index.614015f5.js","_app/immutable/chunks/singletons.99df6ddb.js","_app/immutable/entry/app.f5867086.js","_app/immutable/chunks/index.614015f5.js"],"stylesheets":[],"fonts":[]},
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
