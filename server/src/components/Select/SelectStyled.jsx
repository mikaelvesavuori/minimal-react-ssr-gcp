import styled from 'styled-components';

import breakpoints from 'helpers/constants/breakpoints.mjs';

import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import fontWeights from 'tokens/fontWeights.mjs';

const SelectStyled = styled.div`
	width: 100%;
	max-width: 100%;
	box-sizing: border-box;

	label {
		font-size: ${fontSizes.m};
		font-weight: ${fontWeights.medium};
		margin-bottom: ${spacing.tiny};
	}

	select {
		appearance: none;
		-moz-appearance: none;
		-webkit-appearance: none;
		box-sizing: border-box;

		width: 100%;
		font-size: 16px;

		padding: 0.25rem ${spacing.tiny};
		background-color: ${colors.gray5};
		border: 0;

		&:focus {
			outline: none;
		}

		@media screen and (max-width: ${breakpoints.breakpointM}) {
			font-size: 16px;
		}
	}
`;

export default SelectStyled;
