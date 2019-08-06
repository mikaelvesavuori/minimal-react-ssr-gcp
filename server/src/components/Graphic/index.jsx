import React from 'react';
import PropTypes from 'prop-types';

import GraphicStyled from './GraphicStyled';

const Graphic = props => (
	<GraphicStyled {...props}>
		<img src={props.image} />
	</GraphicStyled>
);

Graphic.propTypes = {
	image: PropTypes.string.isRequired
};

Graphic.defaultProps = {};

export default Graphic;
