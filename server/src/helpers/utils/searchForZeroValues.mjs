export default function searchForZeroValues(obj) {
	let containsZeroValues = false;

	Object.values(obj).forEach(item => {
		if (item === 0) {
			containsZeroValues = true;
		}
	});

	return containsZeroValues;
}
