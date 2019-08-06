import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';

const InstallBannerStyled = styled.div`
	position: fixed;
	z-index: 100;
	left: 0;
	bottom: 0;
	width: 100%;

	.InstallBanner-Contents {
		font-size: 20px;
		line-height: 1.3;
		text-align: center;

		color: ${colors.white};
		background-color: ${colors.black};
		padding: ${spacing.small} ${spacing.medium};
		border-radius: 10px;
		width: 90%;
		max-width: 600px;
		margin: 0 auto;

		@media screen and (max-width: 768px) {
			font-size: 16px;
			padding: ${spacing.tiny};
		}
	}

	.InstallBanner-PointyArrow {
		width: 0;
		height: 0;
		border-left: 20px solid transparent;
		border-right: 20px solid transparent;
		border-top: 20px solid ${colors.black};
		margin: 0 auto;
	}
`;

export default InstallBannerStyled;
