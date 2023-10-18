import { sendPasswordResetEmail } from "firebase/auth";
import { getFirebase } from '../firebase';

const { auth } = getFirebase();

export default async function sendPasswordResetEmailToUser(email)
{
  return new Promise((resolve, reject) => {
    sendPasswordResetEmail(auth, email).then(() => {
      resolve(true);
    }).catch((e) => {
      console.error('Error sending password reset email: ', e);
      reject(e);
    });
  });
}