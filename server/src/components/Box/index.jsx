import React from 'react';
import PropTypes from 'prop-types';

import BoxStyled from './BoxStyled';

const Box = props => <BoxStyled {...props}>{props.children}</BoxStyled>;

Box.propTypes = {};

Box.defaultProps = {};

export default Box;
