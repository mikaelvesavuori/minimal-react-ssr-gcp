import styled from 'styled-components';

import fontSizes from 'tokens/fontSizes.mjs';
import lineHeights from 'tokens/lineHeights.mjs';
import fontWeights from 'tokens/fontWeights.mjs';

const H3Styled = styled.h3`
	font-size: ${fontSizes.h3};
	line-height: ${lineHeights.xs};
	font-weight: ${fontWeights.medium};
	text-align: ${props => (props.center ? 'center' : '')};
`;

export default H3Styled;
