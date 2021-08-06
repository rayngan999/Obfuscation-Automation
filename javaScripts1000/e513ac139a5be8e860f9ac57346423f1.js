// eslint-disable-next-line webpack-friendly-define-require
window.define = function (key, deps, func) {
	if (key === 'ustream-player') {
		window.ustreamPlayer = func();
	}
};
