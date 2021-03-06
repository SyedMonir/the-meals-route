import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import app from '../firebase.init';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Sign-out successful.');
      })
      .catch((error) => {
        console.log('An', error, 'happened');
      });
  };

  return { user, signInWithGoogle, handleSignOut };
};

export default useFirebase;
