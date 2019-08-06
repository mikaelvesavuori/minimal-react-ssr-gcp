import unpackStoredAppState from 'helpers/state/unpackStoredAppState.mjs';

export default function getInitialState() {
	const STORED_APPSTATE = unpackStoredAppState();

	/* For each item you want to thaw/unfreeze, you should probably check for existence - and in case there is nothing there from before - set something new */

	const LAST_VISIT_TIME = Date.now();

	const CLOSED_CONSENT =
		STORED_APPSTATE && STORED_APPSTATE.closedConsent ? STORED_APPSTATE.closedConsent : false;

	const ACCEPTED_TERMS =
		STORED_APPSTATE && STORED_APPSTATE.acceptedTerms ? STORED_APPSTATE.acceptedTerms : false;

	const ACCEPTED_TERMS_TIME =
		STORED_APPSTATE && STORED_APPSTATE.acceptedTermsTime ? STORED_APPSTATE.acceptedTermsTime : null;

	return {
		...STORED_APPSTATE,
		lastVisitTime: LAST_VISIT_TIME,
		closedConsent: CLOSED_CONSENT,
		acceptedTerms: ACCEPTED_TERMS,
		acceptedTermsTime: ACCEPTED_TERMS_TIME
	};
}
