export default function setScreenName(screen) {
	const newScreen = screen.replace(/^\w/, c => c.toUpperCase());
	return `isDisplaying${newScreen}`;
}
