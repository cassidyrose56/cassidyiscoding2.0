export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","svg/.DS_Store","svg/InternHouseLogo.svg","svg/LifeCloudLogo.svg","svg/LightQLLogo.svg","svg/darkMulti.svg","svg/darkPink.svg","svg/lightMulti.svg","svg/lightPink.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.D40p1cD9.js","app":"_app/immutable/entry/app.Bej5o9Sw.js","imports":["_app/immutable/entry/start.D40p1cD9.js","_app/immutable/chunks/entry.5TE_EJaG.js","_app/immutable/chunks/scheduler.D-NikIHS.js","_app/immutable/entry/app.Bej5o9Sw.js","_app/immutable/chunks/scheduler.D-NikIHS.js","_app/immutable/chunks/index.Bl32-MSW.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
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
		},
		server_assets: {}
	}
}
})();
