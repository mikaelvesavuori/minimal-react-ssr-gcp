import styled from 'styled-components';

const LoaderStyled = styled.div`
	width: 40px;
	height: 100vh;
	margin: 0 auto;
	display: flex;
	align-items: center;

	img {
		width: 100%;
		animation: spin infinite forwards 1s;
		@keyframes spin {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
	}
`;

export default LoaderStyled;
