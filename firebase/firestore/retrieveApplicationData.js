import { collection, doc, getDocs, getDocsFromServer, limit, query } from 'firebase/firestore';
import { getFirebase } from '../firebase';

const { db } = getFirebase();

export default async function retrieveApplicationData(uid)
{
  // retrieve all the data from the user document

  let result = null;
  let error = null;
  console.log(uid);
  try
  {
    const userRef = doc(db, 'users', uid);
    const userSnapshot = await getDocs(userRef);
    console.log(userSnapshot.docs);
    const userData = userSnapshot.data();
    result = userData;
    console.log(result);
  } catch (e)
  {
    error = e;
  }

  return { result, error };
}