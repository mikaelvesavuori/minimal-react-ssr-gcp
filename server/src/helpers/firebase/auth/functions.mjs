import { auth, provider } from 'helpers/firebase/auth/init.mjs';

// Sign Up
export const createUserWithEmailAndPassword = (email, password, callBack) => {
	auth
		.createUserWithEmailAndPassword(email, password)
		.then(result => {
			callBack(result);
		})
		.catch(error => {
			console.warn('create user error', error);
		});
};

// Sign In
export const signInWithEmailAndPassword = (email, password, callBack) => {
	auth
		.signInWithEmailAndPassword(email, password)
		.then(result => {
			const user = {
				uid: result.user.uid,
				email: result.user.email
			};

			callBack(user);
		})
		.catch(error => {
			loggedIn(false, error.message);
		});
};

// Password Reset
export const passwordReset = (email, callBack) => {
	auth
		.sendPasswordResetEmail(email)
		.then(result => {
			callBack(result);
		})
		.catch(error => {
			console.warn('password reset error', error);
		});
};

// Password Change
export const passwordUpdate = password => {
	auth.currentUser.updatePassword(password);
};

// Popup sign in with Google account
export const signInWithGoogle = callBack => {
	auth.signInWithPopup(provider).then(result => {
		const user = {
			uid: result.user.uid,
			email: result.user.email
		};

		if (callBack !== undefined) {
			callBack(user);
		}
	});
};

// Sign out
export const signOut = callBack => {
	auth.signOut().then(
		function() {
			if (callBack !== undefined) {
				callBack();
			}
		},
		function(error) {
			console.warn(error);
		}
	);
};
