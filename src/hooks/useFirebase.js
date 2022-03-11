import { useState, useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import initializeAuthentication from "./../Firebase/firebase.initialize";
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const SignUpWithEmail = () => {
    console.log(email, password, name);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        const user = result.user;
        setUser(user);
        setUserProfileName();
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  };
  const loginWithEmail = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {});
  };
  const setUserProfileName = () => {
    console.log("display", name, "login", auth.currentUser);
    updateProfile(auth.currentUser, { displayName: name }).then((res) => {
      console.log(res);
      setUser(res.user);
    });
  };
  const logout = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  return {
    user,
    signInUsingGoogle,
    logout,
    SignUpWithEmail,
    setPassword,
    setEmail,
    email,
    password,
    name,
    setName,
    setUserProfileName,
    loginWithEmail,
  };
};

export default useFirebase;
