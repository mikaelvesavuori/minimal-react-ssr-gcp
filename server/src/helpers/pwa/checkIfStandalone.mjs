// This should work for most cases, except perhaps not for Samsung Browser
export default function checkIfStandalone() {
	return ('standalone' in window.navigator && window.navigator.standalone) ||
		window.matchMedia('(display-mode: standalone)').matches
		? true
		: false;
}
