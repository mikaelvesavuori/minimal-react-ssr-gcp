import styled from 'styled-components';

import fontFamilies from 'tokens/fontFamilies.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import colors from 'tokens/colors.mjs';
import lineHeights from 'tokens/lineHeights.mjs';

const ParagraphStyled = styled.p`
	font-family: ${fontFamilies.fontRegular};
	font-size: ${fontSizes.m};
	line-height: ${lineHeights.m};
	color: ${colors.gray1};
`;

export default ParagraphStyled;
