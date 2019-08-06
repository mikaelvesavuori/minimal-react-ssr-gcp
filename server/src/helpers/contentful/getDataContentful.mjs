import contentful from 'helpers/contentful';

export default async function getDataContentful(query) {
	const entries = await contentful
		.getEntries(query)
		.then(entries => {
			// Do some clean-up: Make sure we only return "fields" and not the "sys" bits
			const _entries = entries.items.map(entry => {
				return entry.fields;
			});

			return _entries;
		})
		.catch(error => console.warn(error));

	return entries;
}
