import React from 'react';
import PropTypes from 'prop-types';

import InstallBannerStyled from './InstallBannerStyled';

const InstallBanner = props => (
	<InstallBannerStyled {...props}>
		<div className="InstallBanner-Contents">
			Installera denna webbapp på din iPhone genom att klicka på [IKON] och{' '}
			<strong>Add to Homescreen</strong>.
		</div>
		<div className="InstallBanner-PointyArrow" />
	</InstallBannerStyled>
);

InstallBanner.propTypes = {};

InstallBanner.defaultProps = {};

export default InstallBanner;
