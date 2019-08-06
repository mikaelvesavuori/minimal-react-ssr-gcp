export default function restoreState() {
	if (!window.localStorage.appState) {
		return undefined;
	} else {
		const STATE = JSON.parse(window.localStorage.appState);

		return STATE;
	}
}
