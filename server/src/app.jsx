import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const App = () => <div>REACT APP</div>;

App.propTypes = {
	appVersion: PropTypes.string,
	location: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
};

export default withRouter(App);
