import React from 'react';
import PropTypes from 'prop-types';

import OverlayStyled from './OverlayStyled';

const Overlay = props => {
	return <OverlayStyled {...props} />;
};

Overlay.propTypes = {};

Overlay.defaultProps = {};

export default Overlay;
