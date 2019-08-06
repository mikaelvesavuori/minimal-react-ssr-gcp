export default function checkIfDeviceIsIOS() {
	/*
	const IS_IOS =
		!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
	*/

	const IS_IOS = window.navigator.userAgent.toLowerCase();
	return /iphone|ipad|ipod/.test(IS_IOS);
}
