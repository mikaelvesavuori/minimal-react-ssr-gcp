import styled from 'styled-components';

const GridChildStyled = styled.div`
	grid-row-start: ${props => props.rowStart && `${props.rowStart}`};
	grid-row-end: ${props => props.rowSpan && `span ${props.rowSpan}`};

	${props => {
		let isObject = typeof props.columnSpan === 'object';
		if (isObject) {
			let breaks = props.columnSpan.map(breakpoint => {
				if (!breakpoint.break) {
					return `grid-column: ${breakpoint.start ? `${breakpoint.start} /` : ''} ${
						breakpoint.columns ? `span ${breakpoint.columns}` : -1
					};
					display: ${breakpoint.display ? breakpoint.display : 'initial'};`;
				} else {
					return `@media all and (min-width: ${
						typeof breakpoint.break === 'string' ? breakpoint.break : `${breakpoint.break}px`
					}) {
						grid-column: ${breakpoint.start ? `${breakpoint.start} /` : ''} ${
						breakpoint.columns ? `span ${breakpoint.columns}` : -1
					};
					display: ${breakpoint.display ? breakpoint.display : 'initial'}
					}`;
				}
			});
			breaks = breaks.join('\n');
			return breaks;
		} else {
			return `grid-column: ${props.columnSpan ? props.columnSpan : '1 / -1'};`;
		}
	}};
	justify-self: ${props => props.align};
	align-self: ${props => props.alignSelf};
	padding: ${props => props.padding};
`;

export default GridChildStyled;
