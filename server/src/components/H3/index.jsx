import React from 'react';
import PropTypes from 'prop-types';

import H3Styled from './H3Styled';

const H3 = props => <H3Styled {...props}>{props.children}</H3Styled>;

H3.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
	center: PropTypes.bool
};

H3.defaultProps = {
	center: false
};

export default H3;
