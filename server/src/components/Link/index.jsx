import React from 'react';
import PropTypes from 'prop-types';

import LinkStyled from './LinkStyled';

const Link = props => (
  <LinkStyled href={props.to} target={props.target} rel="noreferrer noopener">
    {props.children}
  </LinkStyled>
);

Link.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]).isRequired,
	to: PropTypes.string,
	target: PropTypes.string
};

Link.defaultProps = {
	target: '_self'
};

export default Link;
