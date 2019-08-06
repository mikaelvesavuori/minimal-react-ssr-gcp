import React from 'react';
import PropTypes from 'prop-types';

import H2Styled from './H2Styled';

const H2 = props => <H2Styled {...props}>{props.children}</H2Styled>;

H2.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
	center: PropTypes.bool
};

H2.defaultProps = {
	center: false
};

export default H2;
