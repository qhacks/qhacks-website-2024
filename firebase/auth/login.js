import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirebase } from '../firebase';

const { firebase } = getFirebase();
const auth = getAuth(firebase);

export default async function login(email, password)
{
  let result = null;
  let error = null;

  try
  {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e)
  {
    error = e;
  }

  return { result, error };
}