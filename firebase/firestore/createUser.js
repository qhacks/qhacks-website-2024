import { doc, setDoc } from 'firebase/firestore';
import { getFirebase } from '../firebase';

const { db } = getFirebase();

export default async function createUser(uid, email)
{
  let result = null;
  let error = null;

  try
  {
    const userRef = doc(db, 'users', uid);
    result = await setDoc(userRef, {email, aboutComplete: false, educationComplete: false, additionalInfoComplete: false, policiesComplete: false}).then(() => {
      console.log('Document successfully written!');
    }).catch((e) => { console.error('Error writing document: ', e); });
  } catch (e)
  {
    error = e;
  }

  return { result, error };
}