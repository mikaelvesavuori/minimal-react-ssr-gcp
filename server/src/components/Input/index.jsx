import React from 'react';
import PropTypes from 'prop-types';

import InputStyled from './InputStyled';

const Input = props => (
	<InputStyled {...props}>
		<label htmlFor={props.name}>{props.label}</label>
		{props.textarea && (
			<textarea
				type={props.type}
				id={props.name}
				required={props.required}
				pattern="[^\#_@£$|*/]{2,500}"
				onChange={e => props.onChange(e)}
				value={props.value}
				defaultValue={props.defaultValue}
			/>
		)}
		{!props.textarea && (
			<input
				type={props.type}
				id={props.name}
				name={props.name}
				accept={props.accept}
				required={props.required}
				pattern="[^\#_@£$|*/]{2,500}"
				multiple={props.multiple}
				capture={props.capture}
				onChange={e => props.onChange(e)}
				value={props.value}
				defaultValue={props.defaultValue}
			/>
		)}
	</InputStyled>
);

Input.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string,
	accept: PropTypes.string,
	required: PropTypes.bool,
	capture: PropTypes.bool,
	onChange: PropTypes.func,
	multiple: PropTypes.bool,
	textarea: PropTypes.bool,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
};

Input.defaultProps = {
	onChange: () => null,
	type: 'text',
	label: 'Input',
	name: 'Input',
	accept: '*',
	required: false,
	capture: false,
	multiple: false,
	textarea: false,
	value: ''
};

export default Input;
