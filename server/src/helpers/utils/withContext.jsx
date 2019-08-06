import React, { Component } from 'react';
import AppContext from 'contexts/AppContext';

const withContext = MyComponent =>
	class Context extends Component {
		render() {
			return (
				<AppContext.Consumer>
					{context => {
						return <MyComponent {...this.props} context={context} />;
					}}
				</AppContext.Consumer>
			);
		}
	};

export default withContext;
