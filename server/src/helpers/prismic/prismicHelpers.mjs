// Return a cleaned set of data where the 'primary' property is spread and non-zero length items arrays are output, else ignored
export function prepareData(data) {
	const fixedData = [];

	data.body.forEach(item => {
		const items = { ...item.primary };

		items.sliceType = item.slice_type;

		if (item.items.length !== 1) {
			items.items = item.items;
		}

		fixedData.push(items);
	});

	return fixedData;
}

// Check for, and get, values from Prismic's array-style fields
export const getValueFromApiArray = (input, key = 'text') => {
	if (!input || input.length === 0) {
		return '';
	}

	return input[0][key];
};

export const getValueFromPrismicArray = (data, dataKey, key = 'text') => {
	if (!data || data.length === 0) {
		return '';
	}

	if (data[dataKey] && data[dataKey].length > 0 && data[dataKey][0][key]) {
		return data[dataKey][0][key];
	}

	return '';
};

export const cleanItem = data => {
	// Create base item
	const NEW_ITEM = {};

	// Clean everything that will have dirty structure
	Object.entries(data).map(entry => {
		if (Array.isArray(entry[1])) {
			NEW_ITEM[entry[0]] = getValueFromApiArray(entry[1], 'text');
		} else {
			NEW_ITEM[entry[0]] = entry[1];
		}
	});

	return NEW_ITEM;
};

export function extractKeyText(data, requestedString, sliceType = undefined, id = 0) {
	if (data && data.length > 0) {
		const filtered =
			sliceType !== undefined ? data.filter(data => data.sliceType === sliceType) : data[id];
		const _data = filtered[id];

		const stringExists = (() => {
			if (_data.hasOwnProperty([requestedString])) {
				return true;
			} else if (_data.items) {
				if (_data.items[requestedString]) {
					return true;
				}
			}

			return false;
		})();

		if (stringExists) {
			if (_data[requestedString]) {
				return _data[requestedString];
			} else if (_data.items[requestedString]) {
				return _data.items[requestedString];
			} else return '';
		}
	} else return '';
}

// Currently only does paragraphs and links
// TODO Improvement: If possible, use a function at the return end to return HTML so we can immediately use the output with React's dangerouslySetInnerHTML; however does not seem to work?
// Docs: https://reactjs.org/docs/dom-elements.html
export function richTextToString(data, requestedString, sliceType = undefined) {
	if (data && data.length > 0) {
		const filtered =
			sliceType !== undefined ? data.filter(data => data.sliceType === sliceType) : data[0];
		const _data = filtered[0];

		const stringExists = (() => {
			if (_data.hasOwnProperty([requestedString])) {
				return true;
			} else if (_data.items) {
				if (_data.items[requestedString]) {
					return true;
				}
			}

			return false;
		})();

		if (stringExists) {
			let string = '';

			const text = _data[requestedString][0];

			let currentChar = 0;

			for (let index in text.spans) {
				string += `${text.text.substring(currentChar, text.spans[index].start)}`;

				if (text.spans[index].type === 'hyperlink') {
					string += `<a href="${text.spans[index].data.url}">${text.text.substring(
						text.spans[index].start,
						text.spans[index].end
					)}</a>`;
				}

				currentChar = text.spans[index].end;
			}

			if (currentChar < text.text.length) {
				string += text.text.substring(currentChar, text.text.length);
			}

			return string;
		} else return '';
	} else return '';
}
