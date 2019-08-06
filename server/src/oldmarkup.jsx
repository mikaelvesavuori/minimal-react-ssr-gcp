import AppContext from 'contexts/AppContext';

import persistState from 'helpers/state/persistState.mjs';
import getData from 'helpers/data/getData.mjs';
import getLocale from 'helpers/utils/getLocale.mjs';

import Debug from 'components/Debug';
import InstallBanner from 'components/InstallBanner';
import ConsentModal from 'components/ConsentModal';

import getInitialState from 'state/getInitialState.mjs';

import Routes from 'routes/index';

{
	this.state.debug && (
		<Debug appVersion={this.props.appVersion} wipeStorageAndReload={this.wipeStorageAndReload} />
	);
}

{
	this.state.appState.deviceIsIOS && !this.state.appState.isStandalone && <InstallBanner />;
}

{
	!this.state.appState.closedConsent && (
		<ConsentModal
			text="By using this app/site you are agreeing to our Integrity Policy and our use of cookies and similar technologies."
			closeLabel="Close"
			close={this.closeConsentModal}
		/>
	);
}

<Routes appState={this.state.appState} data={this.state.data} />;
