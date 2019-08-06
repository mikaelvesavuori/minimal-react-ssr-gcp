import React from 'react';
import PropTypes from 'prop-types';

import AppContext from 'contexts/AppContext';

class SomeProvider extends React.Component {
	constructor() {
		super();

		this.state = {
			something: 0
		};
	}

	render() {
		return <AppContext.Provider value={this.state}>{this.props.children}</AppContext.Provider>;
	}
}

SomeProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	])
};

SomeProvider.defaultTypes = {};

export default SomeProvider;
