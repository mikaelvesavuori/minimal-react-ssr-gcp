import marked from 'marked';

export default function processMarkdown(markdown, breaks = false) {
	let rawMarkup = marked(markdown, { sanitize: true, breaks: breaks });
	return { __html: rawMarkup };
}
