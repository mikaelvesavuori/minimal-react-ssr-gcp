/* eslint-disable no-undef */

export default async function sendData(endpoint, options) {
	const RESPONSE = await fetch(endpoint, options);

	return RESPONSE.json();
}
