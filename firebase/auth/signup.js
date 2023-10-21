import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import { getFirebase } from '../firebase';
import createUser from "../firestore/createUser";
import logout from "./logout";

const { firebase } = getFirebase();
const auth = getAuth(firebase);

export default async function signUp(email, password)
{
    let result = null;
    let error = null;

    try
    {
        result = await createUserWithEmailAndPassword(auth, email, password).then(async (res) => {
            await createUser(res.user.uid, email).then(async () => {
                await sendEmailVerification(auth.currentUser).then(async () => {
                    await logout();
                }).catch((e) => {
                    console.error('Error sending email verification: ', e);
                    error = e;
                });
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