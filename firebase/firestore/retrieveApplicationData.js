import { collection, doc, getDocs, getDocsFromServer, limit, query } from 'firebase/firestore';
import { getFirebase } from '../firebase';

const { db } = getFirebase();

export default async function retrieveApplicationData(uid)
{
  // retrieve all the data from the user document

  let result = null;
  let error = null;
  try
  {
    const userRef = doc(db, 'users', uid);
    const userSnapshot = await getDocs(userRef);
    const userData = userSnapshot.data();
    result = userData;
  } catch (e)
  {
    error = e;
  }

  return { result, error };
}