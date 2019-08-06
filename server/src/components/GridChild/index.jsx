import React from 'react';
import PropTypes from 'prop-types';

import GridChildStyled from './GridChildStyled';

// USEAGE OF COLUMNSPAN EXAMPLE (12 columns up until 900px then 6):
// columnSpan={[{ columns: 12 }, { break: 900, columns: 6 }]}
const GridChild = props => {
	return <GridChildStyled {...props} className={`GridChild ${props.className || ''}`} />;
};

GridChild.propTypes = {
	columnSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.object)]),
	children: PropTypes.node,
	align: PropTypes.oneOf(['end', 'center', 'start', 'stretch']),
	padding: PropTypes.string,
	rowSpan: PropTypes.string,
	rowStart: PropTypes.string
};

GridChild.defaultProps = {
	align: 'stretch'
};

export default GridChild;
