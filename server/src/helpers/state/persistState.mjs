import updateLocalStorage from 'helpers/state/updateLocalStorage.mjs';

export default function persistState(state, key = 'appState') {
	/*
		//const RETIMED_STATE = Object.assign(state, { updated: Date.now() });
		//updateLocalStorage("appState", RETIMED_STATE);
	*/

	updateLocalStorage(key, state);
}
