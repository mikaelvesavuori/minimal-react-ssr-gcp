import styled from 'styled-components';

import colors from 'tokens/colors.mjs';

const LinkStyled = styled.a`
	color: ${colors.blue};
	text-decoration: none;
	transition: 0.2s;

	&:hover {
		color: ${colors.gray};
		transition: 0.2s;
	}

	&:focus {
		color: inherit;
		box-shadow: none !important;
		outline: 0px;
		border: 3px auto -webkit-focus-ring-color !important;
	}

	&:active {
		color: inherit;
	}

	&:visited {
		color: inherit;
	}
`;

export default LinkStyled;
