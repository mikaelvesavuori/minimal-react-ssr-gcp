export default function searchForNegativeValues(obj) {
	let containsNegativeValues = false;

	Object.values(obj).forEach(item => {
		if (parseInt(item.height) < 0) {
			containsNegativeValues = true;
		}
	});

	return containsNegativeValues;
}
