import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';

import ConsentModalStyled from './ConsentModalStyled';

const ConsentModal = props => {
	function createMarkup(text) {
		return { __html: text };
	}

	return (
		<ConsentModalStyled {...props}>
			<div className="ConsentModal-Blur">
				<div className="ConsentModal-Contents">
					<p dangerouslySetInnerHTML={createMarkup(props.text)} />
					<Button onClick={props.close}>{props.closeLabel}</Button>
				</div>
			</div>
		</ConsentModalStyled>
	);
};

ConsentModal.propTypes = {
	text: PropTypes.string,
	closeLabel: PropTypes.string,
	close: PropTypes.func.isRequired
};

ConsentModal.defaultProps = {
	text: ''
};

export default ConsentModal;
