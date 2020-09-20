import * as firebase from 'firebase/app';
import { firebaseApp } from '../../Firebase/firebaseConfig';

export const handleGoogleSignIn = (setUser) => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebaseApp
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = {};
      user.token = result.credential.accessToken;
      user.name = result.user.displayName;
      user.email = result.user.email;
      setUser(user);
    })
    .catch((error) => {
      const user = {};
      user.errorMessage = error.message;
      setUser(user);
    });
};
