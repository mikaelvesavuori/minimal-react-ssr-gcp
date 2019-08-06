import React from 'react';
import PropTypes from 'prop-types';

import DebugStyled from './DebugStyled';

const Debug = props => (
	<DebugStyled {...props}>
		<>
			<div
				style={{
					zIndex: 1000,
					position: 'absolute',
					top: 0,
					width: '100%',
					border: 0
				}}
			>
				<button
					style={{
						backgroundColor: 'black',
						color: 'white',
						fontSize: '10px',
						float: 'left'
					}}
					onClick={props.wipeStorageAndReload}
				>
					Clear cache
				</button>

				<div
					style={{
						position: 'absolute',
						fontSize: '12px',
						top: '4px',
						right: 0
					}}
				>
					{props.appVersion}
				</div>
			</div>
		</>
	</DebugStyled>
);

Debug.propTypes = {
	appVersion: PropTypes.string,
	wipeStorageAndReload: PropTypes.func
};

Debug.defaultProps = {
	appVersion: '',
	wipeStorageAndReload: () => null
};

export default Debug;
