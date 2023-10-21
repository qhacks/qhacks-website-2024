import { doc, setDoc } from 'firebase/firestore';
import { getFirebase } from '../firebase';

const { db } = getFirebase();

export default async function updateUser(uid, data)
{
  let result = null;
  let error = null;

  try
  {
    const userRef = doc(db, 'users', uid);
    result = await setDoc(userRef, data, {
      merge: true
    }).then(() => {
    });
  } catch (e)
  {
    error = e;
  }

  return { result, error };
}