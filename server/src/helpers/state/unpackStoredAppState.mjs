export default function unpackStoredAppState() {
	const STORAGE = window.localStorage.getItem('appState')
		? JSON.parse(window.localStorage.getItem('appState'))
		: undefined;

	return STORAGE;
}
