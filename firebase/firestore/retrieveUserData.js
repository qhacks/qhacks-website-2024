import { collection, doc, getDocFromServer, getDocs, getDocsFromServer, limit, query } from 'firebase/firestore';
import { getFirebase } from '../firebase';

const { db } = getFirebase();

export default async function retrieveUserData(uid, data)
{
  // retrieve all the data from the user document

  let result = null;
  let error = null;
  console.log(uid);

  try
  {
    const userRef = doc(db, 'users', uid);
    await getDocFromServer(userRef).then((content) => {
      console.log('Document successfully read!');
      result = content.data();
    }).catch((e) => {
      console.error('Error reading document: ', e);
      error = e;
    });
  } catch (e)
  {
    error = e;
  }

  return { result, error };
}