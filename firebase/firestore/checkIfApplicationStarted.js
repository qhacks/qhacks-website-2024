import { collection, doc, getDoc, getDocs, limit, query, setDoc } from 'firebase/firestore';
import { getFirebase } from '../firebase';

const { db } = getFirebase();

export default async function checkIfApplicationStarted(uid)
{
  // retrieve the user document and check if any of aboutComplete, educationComplete, policiesComplete or additionalInfoComplete is true
  // if any of them is true, then return true, otherwise return false
  let result = null;
  let error = null;

  try
  {
    const userRef = doc(db, 'users', uid);
    const userSnapshot = await getDoc(userRef);
    const userData = userSnapshot.data();
    result = userData.aboutComplete || userData.educationComplete || userData.additionalInfoComplete || userData.policiesComplete;
  } catch (e)
  {
    error = e;
  }

  return { result, error };
}