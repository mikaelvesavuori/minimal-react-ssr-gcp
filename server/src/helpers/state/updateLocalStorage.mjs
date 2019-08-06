export default function updateLocalStorage(name, data, erase = false) {
	if (window.localStorage) {
		if (erase) {
			window.localStorage.removeItem(name);
		} else {
			if (typeof data === 'object') {
				window.localStorage.setItem(name, JSON.stringify(data));
			} else {
				window.localStorage.setItem(name, data);
			}
		}
	} else {
		console.error('ERROR: User has no localStorage or it is not accessible!');
		return false;
	}
}
