import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';

const ConsentModalStyled = styled.div`
	.ConsentModal-Blur {
		width: 100%;
		height: 100%;
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: center;
		top: 0;
		left: 0;
		z-index: 9;
		background-color: rgba(0, 0, 0, 0.9);
		overflow-x: hidden;
		overflow-y: scroll;

		.ConsentModal-Contents {
			width: 90%;
			max-width: 500px;
			text-align: center;
			color: ${colors.black};
			background-color: ${colors.white};
			padding: ${spacing.tiny};

			button {
				width: 100%;
				margin-top: 2rem;
				margin-bottom: 0;
			}
		}
	}
`;

export default ConsentModalStyled;
