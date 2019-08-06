import * as contentfulPackage from 'contentful';
import config from 'servicesConfig.mjs';

const contentful = contentfulPackage.createClient({
	space: config.contentful.space,
	accessToken: config.contentful.accessToken
});

export default contentful;
