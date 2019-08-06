import React from 'react';
import PropTypes from 'prop-types';

import LabelStyled from './LabelStyled';

const Label = props => {
	return <LabelStyled for={props.for}>{props.label}</LabelStyled>;
};

Label.propTypes = {
	for: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired
};

Label.defaultProps = {};

export default Label;
