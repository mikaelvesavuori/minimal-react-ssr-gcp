require('@babel/register');

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ServerSideApp = require('./build/server.bundle.js.js').default;

exports.handler = async function(req, res) {
	const html = ReactDOMServer.renderToString(<ServerSideApp />);
	res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
	res.send(html);
};
