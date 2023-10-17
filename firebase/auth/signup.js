import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirebase } from '../firebase';
import createUser from "../firestore/createUser";

const { firebase } = getFirebase();
const auth = getAuth(firebase);

export default async function signUp(email, password)
{
    let result = null;
    let error = null;

    try
    {
        result = await createUserWithEmailAndPassword(auth, email, password).then(async (res) => {
            await createUser(res.user.uid, email).then(() => {
            }).catch((e) => {
                console.error('Error writing document: ', e);
                error = e;
            });
        });
    } catch (e)
    {
        error = e;
    }

    return { result, error };
}