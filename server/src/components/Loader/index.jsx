import React from 'react';
import PropTypes from 'prop-types';

import Graphic from 'components/Graphic';

import LoaderStyled from './LoaderStyled';

const Loader = props => (
	<LoaderStyled {...props}>
		<Graphic image={`/assets/gfx/icon-spinner${props.green ? '-green' : ''}.svg`} />
	</LoaderStyled>
);

Loader.propTypes = {
	green: PropTypes.bool
	/*
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.element
	]).isRequired,
	to: PropTypes.string.isRequired
	*/
};

Loader.defaultProps = {
	// target: '_self'
};

export default Loader;
