/**
 * @param {string} param
 * @return {boolean}
 * @satisfies {import('@sveltejs/kit').ParamMatcher}
 */
export function match(param) {
	// Block the explicit reserved value used as the matcher name.
	if (!param) return false;
	return param !== 'excludeRss';
}
