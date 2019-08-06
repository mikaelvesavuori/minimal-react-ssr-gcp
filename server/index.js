'use strict';
require('@babel/register');

const functions = require('firebase-functions');
const render = require('./render');

/*
const cors = require('cors')({ origin: true });

const config = {
	projectId: 'mikaelvesavuori-web',
	keyFilename: './mikaelvesavuori-web-a761aeb67e1b.json'
};
*/

exports.app = functions.region('europe-west1').https.onRequest((req, res) => {
	render();
});
