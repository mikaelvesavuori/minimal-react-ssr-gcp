import styled from 'styled-components';

import fontSizes from 'tokens/fontSizes.mjs';
import lineHeights from 'tokens/lineHeights.mjs';
import fontWeights from 'tokens/fontWeights.mjs';

const H2Styled = styled.h2`
	font-size: ${fontSizes.h2};
	line-height: ${lineHeights.xs};
	font-weight: ${fontWeights.medium};
	text-align: ${props => (props.center ? 'center' : '')};
`;

export default H2Styled;
