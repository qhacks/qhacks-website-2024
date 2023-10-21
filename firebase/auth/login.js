import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirebase } from '../firebase';
import logout from './logout';

const { firebase } = getFirebase();
const auth = getAuth(firebase);

export default async function login(email, password)
{
  let result = null;
  let error = null;

  try
  {
    result = await signInWithEmailAndPassword(auth, email, password);
    if (result.user.emailVerified === false)
    {
      error = { code: 'auth/email-not-verified' };
      await logout();
      return { success: false, error };
    }
  } catch (e)
  {
    error = e;
  }

  return { result, error };
}