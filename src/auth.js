// src/auth.js
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebase";

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user; // return user info
  } catch (error) {
    console.error("Login gagal:", error);
    return null;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout gagal:", error);
  }
};
