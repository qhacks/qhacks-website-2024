import { collection, doc, getDoc, getDocs, limit, query, setDoc } from 'firebase/firestore';
import { getFirebase } from '../firebase';

const { db } = getFirebase();

export default async function updateApplicationData(uid, applicationData)
{
  const userRef = doc(db, 'users', uid);
  const applicationRef = doc(collection(userRef, 'application'));

  try
  {
    await setDoc(applicationRef, applicationData, {
      merge: false
    }).then(() => {console.log('Document successfully written!'); return true; }).catch((e) => console.error('Error writing document: ', e));
    return true;
  } catch (e)
  {
    console.error('Error writing document: ', e);
    return false;
  }
}