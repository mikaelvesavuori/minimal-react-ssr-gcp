import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';

const GridStyled = styled.div`
	align-items: ${props => props.align};
	column-gap: ${props =>
		typeof props.columnGap === 'number' ? `${props.columnGap}px` : spacing[props.columnGap]};
	display: grid;
	grid-auto-flow: row;
	justify-content: ${props => props.center && 'center'};
	justify-items: ${props => (props.align === 'flex-start' ? 'stretch' : props.align)};
	margin: ${props => props.margins};
	max-width: ${props => props.maxWidth};

	${props => {
		if (typeof props.columns === 'object') {
			let breaks = props.columns.map(breakpoint => {
				if (!breakpoint.break) {
					return `grid-template-columns: repeat(${breakpoint.columns}, minmax(0, 1fr));`;
				} else {
					return `@media all and (min-width: ${breakpoint.break}) {
						grid-template-columns: repeat(${breakpoint.columns}, minmax(0, 1fr));
					}`;
				}
			});
			breaks = breaks.join('\n');
			return breaks;
		} else {
			return `grid-template-columns: repeat(
				${props.columns},
				${props.minColumnWidth ? `minmax(${props.minColumnWidth}, 1fr)` : 'minmax(0, 1fr)'}
			);`;
		}
	}};

	row-gap: ${props =>
		typeof props.rowGap === 'number' ? `${props.rowGap}px` : spacing[props.rowGap]};
`;

export default GridStyled;
