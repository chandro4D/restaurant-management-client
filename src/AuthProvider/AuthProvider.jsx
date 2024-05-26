import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true);
    // create user-------
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // ------------login--------------------
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // ----------Google Login-------------
    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    // -------------logout------------
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    // ----------update profile------------
    const updateUserProfile = (name, PhotoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: PhotoURL
        })
    }
    // Theme Toggle--------------
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setLoading(true)
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in auth state change', currentUser)
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])
    const allInfo = {
        user,
        loading,
        googleProvider,
        createUser,
        signIn,
        googleLogin,
        logOut,
        updateUserProfile,
        setUser,
        theme,
        setTheme,
        toggleTheme

    }

    return (
        <AuthContext.Provider value={allInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;