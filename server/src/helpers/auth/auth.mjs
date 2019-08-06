import updateLocalStorage from 'helpers/state/updateLocalStorage.mjs';

/* ID */
export function getUserId() {
	if (window.localStorage) {
		return window.localStorage.getItem('id');
	}
	return null;
}

export function setUserId(id) {
	if (window.localStorage) {
		updateLocalStorage('id', id);
		return true;
	}
	return false;
}

/* AUTH */
export function clearUser() {
	window.localStorage.clear();
	window.location = '/';
}

export function getAuthUser() {
	if (window.localStorage.authUser) {
		const user = JSON.parse(window.localStorage.authUser);
		user.isLoggedIn = true;
		return user;
	}
	return {
		isLoggedIn: false
	};
}

export function getAuthUserEmail() {
	const user = getAuthUser();
	return user === null ? '' : user.email;
}

export function setAuthUser(user) {
	if (window.localStorage) {
		window.localStorage.clear(); // Wipe any junk that may reside in LS

		updateLocalStorage('authUser', user);
		return true;
	}
	return false;
}

/* SITE */
export function getSite() {
	if (window.localStorage) {
		let site = window.localStorage.getItem('site');
		if (site === null) {
			site = 0;
		}
		return JSON.parse(site);
	}
	return null;
}

export function setSite(siteId) {
	if (window.localStorage) {
		updateLocalStorage('site', siteId);
		return true;
	}
	return false;
}
