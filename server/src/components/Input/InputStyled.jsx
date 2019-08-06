import styled from 'styled-components';

import breakpoints from 'helpers/constants/breakpoints.mjs';
import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import lineHeights from 'tokens/lineHeights.mjs';

const InputStyled = styled.div`
	width: 100%;
	box-sizing: border-box;
	margin-bottom: ${spacing.huge};
	font-size: 16px;

	label {
		font-size: ${fontSizes.m};
	}

	input,
	textarea {
		width: 100%;
		padding: 0.25rem ${spacing.tiny};
		border: 0;
		background-color: ${colors.gray5};
		margin-top: ${spacing.tiny};
		font-size: ${fontSizes.body1};
		box-sizing: border-box;

		appearance: none;
		-moz-appearance: none;
		-webkit-appearance: none;

		&:focus {
			outline: 0;
		}
	}

	input[type='text'],
	input[type='password'] {
		border: 0;
		border-radius: 0;
		border-bottom: 1px solid white;
	}

	textarea {
		border-radius: 5px;
		border: 1px solid ${colors.gray3};
		min-height: 150px;
		padding: ${spacing.small} ${spacing.medium};
		font-family: 'VolvoNovum';
		line-height: ${lineHeights.s};
		box-sizing: border-box;
	}

	@media screen and (max-width: ${breakpoints.breakpointM}px) {
		input,
		textarea {
			font-size: 16px;
		}
	}
`;

export default InputStyled;
