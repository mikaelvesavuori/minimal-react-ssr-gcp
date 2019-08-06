import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

import Box from 'components/Box';

const DialogStyled = styled(Box)`
	width: 100%;
	position: fixed;
	left: 0;
	bottom: 0;
	margin-bottom: 0;
	box-sizing: border-box;

	color: ${colors.black};
	background-color: ${colors.white};
	font-size: ${fontSizes.h2};
	text-align: center;

	.Dialog-Inside {
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
	}
`;

export default DialogStyled;
