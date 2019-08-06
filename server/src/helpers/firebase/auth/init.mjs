import firebase from 'firebase/app';
import 'firebase/auth';

import config from 'servicesConfig.mjs';

if (!firebase.apps.length) {
	firebase.initializeApp(config.firebase);
}

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
