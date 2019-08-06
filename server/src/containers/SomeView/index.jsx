import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Loader from 'components/Loader';

import View from 'containers/View';
import SomeComposition from 'compositions/SomeComposition';

class SomeView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			appState: props.appState,

			// Data from backend(s)
			data: [],

			// Events
			isLoading: true
		};
	}

	async initView() {
		// In case you need to get view-specific data
		// const data = await getData(endpoint, options);

		await (() => {
			this.setState({
				// data,
				isLoading: false
			});
		})();
	}

	async componentDidMount() {
		await this.initView();
	}

	render() {
		return (
			<View title="Some view">
				{this.state.isLoading && <Loader />}
				{!this.state.isLoading && <SomeComposition />}
			</View>
		);
	}
}

SomeView.propTypes = {
	appState: PropTypes.object,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

SomeView.defaultTypes = {
	appState: {},
	data: {}
};

export default withRouter(SomeView);
