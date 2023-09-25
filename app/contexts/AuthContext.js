const { useState, useContext, createContext } = require("react");
import { addDoc, collection, getDoc } from 'firebase/firestore';
import { db, methods, auth } from '../firebase';
import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/userinfo.profile');

const AuthContext = createContext()

export function useAuth()
{
    return useContext(AuthContext)
}

export function AuthProvider({ children })
{
    const [currentUser, setCurrentUser] = useState();
    const [userData, setUserData] = useState();
    const [loading, setLoading] = useState(true);

    async function signUp(email, password, firstname, lastname)
    {
        return await methods.createUserWithEmailAndPassword(auth, email, password).then(async (user) => {
            try
            {
                const docRef = await addDoc(collection(db, 'users'), {
                    first_name: firstname,
                    last_name: lastname,
                    email
                });
                console.log('Document created:', docRef.id);
            }
            catch (e)
            {
                console.log('Error creating document', e);
            }
            await methods.sendEmailVerification(auth.currentUser).catch((e) => console.log(e));
            logout();
        });
    }
    
    async function signUpWithGoogle()
    {
        return methods.signup(auth, provider).then((res) => {
            const credential = GoogleAuthProvider.credentialFromResult(res);
            const token = credential.accessToken;
            const user = res.user;
        }).catch((e) => {
            const errorCode = error.code;
            console.log(e);
        })
    }

    function login(email, password)
    {
        return methods.signInWithEmailAndPassword(auth, email, password);
    }

    function logout()
    {
        return methods.signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = methods.onAuthStateChanged(auth, async (user) => {
            if (user) {
                setCurrentUser(user)
                setLoading(false)
                setUserData(await getUserData(user.uid))
            } else {
                setCurrentUser(null);
                setUserData(null);
                setLoading(false);
            }
        })

        return unsubscribe
    }, []);

    const value = {
        currentUser,
        userData,
        updateUserData,
        commitUserData,
        signUp,
        signUpWithGoogle,
        resetPassword,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}