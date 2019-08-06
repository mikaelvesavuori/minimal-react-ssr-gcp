/* eslint-disable no-undef */

export default async function getData(endpoint, options) {
	//getData(endpoint, params, options)
	//const params = constructUrl(endpoint, params);

	const RESPONSE = await fetch(endpoint, options);

	return RESPONSE.json();
}

const constructUrl = (endpoint, params) => {
	let url = endpoint;
	let isFirstParamSet = false;

	if (!params) {
		return '';
	}

	Object.entries(params).map(entry => {
		if (entry[0] === 'id') {
			// Get single page
			url += `/${params.id}`;
		} else {
			if (isFirstParamSet) {
				url += `&${entry[0]}=${entry[1]}`;
			} else {
				url += `?${entry[0]}=${entry[1]}`;
				isFirstParamSet = true;
			}
		}
	});
};
