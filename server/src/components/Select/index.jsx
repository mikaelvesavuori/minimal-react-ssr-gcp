import React from 'react';
import PropTypes from 'prop-types';

import SelectStyled from './SelectStyled';

import Label from 'components/Label';

const Select = props => {
	const OPTIONS = props.options.map((option, index) => {
		return (
			<option id={option} key={`SelectOptions_${index}`}>
				{option}
			</option>
		);
	});

	return (
		<SelectStyled {...props}>
			<Label for={props.label} label={props.label} />
			<select
				className={props.className}
				id={props.id ? props.id : props.label}
				onChange={e => props.onChange(e)}
				required={props.required}
			>
				{OPTIONS}
			</select>
		</SelectStyled>
	);
};

Select.propTypes = {
	options: PropTypes.array.isRequired,
	label: PropTypes.string.isRequired,
	className: PropTypes.string,
	id: PropTypes.string,
	required: PropTypes.bool,
	onChange: PropTypes.func
};

Select.defaultProps = {
	required: false,
	className: '',
	id: '',
	onChange: () => null
};

export default Select;
