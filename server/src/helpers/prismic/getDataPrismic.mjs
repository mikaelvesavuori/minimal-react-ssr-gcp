import Prismic from 'prismic-javascript';
import config from 'servicesConfig.mjs';

export default async function getData(pageType, language) {
	let data;

	await Prismic.getApi(config.prismic.apiEndpoint)
		.then(api =>
			api.query(Prismic.Predicates.at('document.type', pageType), {
				lang: language
			})
		)
		.then(
			response => {
				if (response.results.length > 0) {
					data = response.results[0].data;
				}
			},
			error => {
				console.error('Something went wrong: ', error);
			}
		);

	return data;
}
