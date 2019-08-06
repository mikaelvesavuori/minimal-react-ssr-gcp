import { storage } from 'helpers/firebase/auth/init.mjs';

// File from fileupload (e.target.files[0])
export const uploadFile = (file, folderName, callbackFunc) => {
	const file = e.target.files[0];
	const ref = storage.ref();
	const siteRef = ref.child(folderName);

	siteRef
		.child(file.name)
		.put(file)
		.then(async snapshot => {
			if (snapshot.state === 'success') {
				siteRef
					.child(file.name)
					.getDownloadURL()
					.then(async fullPath => {
						const mediaItem = {
							path: fullPath,
							name: snapshot.metadata.name,
							contentType: snapshot.metadata.contentType,
							createdAt: snapshot.metadata.timeCreated,
							siteId: this.props.site.id
						};

						callbackFunc(mediaItem);
					});
			}
		});
};

// You could
export const deleteFile = (fileName, folderName, callbackFunc) => {
	const ref = storage.ref();

	// Option to put all images in a folder, if folder does not exist it will be created
	const siteRef = folderName ? ref.child(`${folderName}/${fileName}`) : ref.child(`${fileName}`);

	siteRef
		.delete()
		.then(async () => {
			callbackFunc({ status: 'ok' });
		})
		.catch(error => {
			console.warn(error);
		});
};
