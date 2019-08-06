export default function formatDate(date, locale = 'en-US') {
	const _DATE = new Date(date);

	const OPTIONS = {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	};

	const FIXED_DATE = _DATE.toLocaleDateString(locale, OPTIONS).toString();

	return FIXED_DATE;
}
