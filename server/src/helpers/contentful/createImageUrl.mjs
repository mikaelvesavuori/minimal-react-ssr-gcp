function setCorrectProtocol(path) {
	if (path.match(/http:\/\/|https:\/\//gi)) {
		return path.replace(/http:\/\/|https:\/\//gi, ''); // |:\/\/|\/\/
	}
	return path;
}

export default function createImageUrl(sourceImage, format, size, qualityLevel) {
	if (sourceImage !== undefined) {
		const protocol = `https://`;
		const protocollessPath = setCorrectProtocol(sourceImage);

		if (!sourceImage.includes('images.ctfassets.net')) {
			const pathMinusFormat = protocollessPath.substring(0, protocollessPath.length - 4); // Take the entire path except file ending
			const fixedPath = `${pathMinusFormat}_${size}.${format}`;
			return fixedPath;
		} else if (sourceImage.includes('images.ctfassets.net')) {
			const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 768;
			let quality = 1;
			let newSize = size;

			if (qualityLevel) {
				if (windowWidth <= 1024) {
					newSize = 1024;
					quality = qualityLevel * 0.7;
				} else {
					quality = qualityLevel;
				}
			}

			const fixedPath = `${protocol}${protocollessPath}?w=${newSize}&fm=${format}&q=${quality}`;
			return fixedPath;
		}
		return false;
	}
	return false;
}
