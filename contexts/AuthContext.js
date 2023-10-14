import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut } from "firebase/auth";
import { getFirebase } from "../firebase/firebase";
import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();
const { auth } = getFirebase();

export function useAuth()
{
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user)
                setCurrentUser(user);
            else
            {
                setCurrentUser(null);
            }

            setLoading(false);
        });
        return () => unsubscribe;
    }, []);

    return <AuthContext.Provider value={{currentUser}}>{!loading && children}</AuthContext.Provider>
}