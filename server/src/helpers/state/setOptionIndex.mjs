export default function setOptionIndex(element = document.querySelector('select'), lookup) {
	if (element) {
		if (element.options) {
			if (element.options.length > 0) {
				for (let i of element.options.length) {
					// toString() just in case we deal with bools or some other strange weirdo stuff
					if (element.options[i].value === lookup.toString()) {
						element.selectedIndex = i;
						break;
					}
				}
			}
		}
	} else {
		console.error(`Error in setOptionIndex, element is: ${element} and lookup is ${lookup}`);
	}
}
