export default function getNewScreen(screenState, newScreen) {
	const SCREENS = {};

	Object.entries(screenState).forEach(item => {
		SCREENS[item[0]] = false;
	});

	SCREENS[newScreen] = true;

	return SCREENS;
}
