export default function getLocale(path = window.location.hostname) {
	const TLD = path.substring(path.length - 3, path.length);
	//console.log("TLD", TLD);

	// Development or internal use
	if (path.includes('netlify')) {
		return 'sv-se';
	} else {
		// Development or actual Swedish host
		if (path.includes(':8080') || path.includes(':8081') || TLD === '.se') {
			return 'sv-se';
		} else if (TLD === '.no') {
			return 'no-no';
		} else if (TLD === '.dk') {
			return 'da-dk';
		} else if (TLD === '.fi') {
			return 'fi-fi';
		} else {
			console.warn('Could not match TLD with any known variant, fallback is used');
			return 'en-dt'; // "Data" is fallback (This is in a Prismic use-case, set to whatever makes sense for you)
		}
	}
}
