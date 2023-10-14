import { getAuth, signOut } from 'firebase/auth';
import { getFirebase } from '../firebase';

const { firebase } = getFirebase();
const auth = getAuth(firebase);

export default async function logout()
{
  let result = null;
  let error = null;

  try
  {
    result = await signOut(auth);
  } catch (e)
  {
    error = e;
  }

  return { result, error };
}