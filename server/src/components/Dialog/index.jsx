import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';

import DialogStyled from './DialogStyled';

const Dialog = props => (
	<div
		style={
			'width:100%; height:100%; position:fixed; top:0; left:0; background-color:rgba(0,0,0,0.8);'
		}
	>
		<DialogStyled>
			<div className="Dialog-Inside">
				<Button onClick={e => props.toggleDialog(e)} />
				{props.children}
			</div>
		</DialogStyled>
	</div>
);

Dialog.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.number]).isRequired,
	toggleDialog: PropTypes.func.isRequired
};

Dialog.defaultProps = {};

export default Dialog;
