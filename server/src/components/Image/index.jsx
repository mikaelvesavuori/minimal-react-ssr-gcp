import React from 'react';
import PropTypes from 'prop-types';

import createImageUrl from 'helpers/contentful/createImageUrl.mjs';
//import breakpoints from "helpers/constants/breakpoints.mjs";

import ImageStyled from './ImageStyled';

//const sizeFull = 100;

const Image = ({ src, caption, sizes, responsive, width }) => {
	const setupImageMetadata = () => {
		const defaultCaption = 'Image caption';

		let imageCaption = '';
		if (!caption || caption === '' || caption === undefined || caption === null) {
			imageCaption = defaultCaption;
		} else {
			imageCaption = caption;
		}
		return imageCaption;
	};

	const imgCaption = setupImageMetadata();

	if (responsive) {
		return (
			<ImageStyled>
				<img
					src="/assets/img/image.jpg"
					srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
					data-srcSet={`
						${createImageUrl(src, 'jpg', 768, 30)} 768w,
						${createImageUrl(src, 'jpg', 2880, 30)} 2880w,
						${createImageUrl(src, 'jpg', 1920, 30)} 1920w,
						${createImageUrl(src, 'jpg', 1440, 30)} 1440w,
						${createImageUrl(src, 'jpg', 1024, 30)} 1024w,
						${createImageUrl(src, 'jpg', 480, 30)} 480w,
						${createImageUrl(src, 'jpg', 320, 30)} 320w`}
					data-src={createImageUrl(src, 'jpg', 768, 30)}
					data-sizes="auto"
					/*
					data-sizes={`
						(max-width: ${breakpoints.breakpointsXs}px) ${sizes.xs ? sizes.s : sizeFull}%,
						(max-width: ${breakpoints.breakpointsS}px) ${sizes.s ? sizes.s : sizeFull}%,
						(max-width: ${breakpoints.breakpointsM}px) ${sizes.m ? sizes.m : sizeFull}%,
						(max-width: ${breakpoints.breakpointsL}px) ${sizes.l ? sizes.l : sizeFull}%,
						(max-width: ${breakpoints.breakpointsXl}px) ${sizes.xl ? sizes.xl : sizeFull}%,
					`}
					*/
					alt={imgCaption}
					title={imgCaption}
					style={{ width, maxWidth: '100%' }}
					className="lazyload"
				/>
			</ImageStyled>
		);
	} else if (!responsive) {
		return (
			<img
				src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
				data-src={src}
				alt={imgCaption}
				title={imgCaption}
				style={{ width, maxWidth: '100%' }}
				className="lazyload"
			/>
		);
	}
	return true;
};

Image.propTypes = {
	src: PropTypes.string.isRequired,
	caption: PropTypes.string,
	sizes: PropTypes.object,
	width: PropTypes.string,
	responsive: PropTypes.bool
};

Image.defaultProps = {
	caption: '',
	width: '100%',
	sizes: {},
	responsive: false
};

export default Image;
