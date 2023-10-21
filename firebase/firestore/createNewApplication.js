import { collection, doc, getDoc, getDocs, limit, query, setDoc } from 'firebase/firestore';
import { getFirebase } from '../firebase';
import checkIfApplicationStarted from './checkIfApplicationStarted';

const { db } = getFirebase();

export default async function createNewApplication(uid)
{
  if (await checkIfApplicationStarted(uid))
  {
    return false;
  }
  
  const userRef = doc(db, 'users', uid);
  const applicationRef = doc(collection(userRef, 'application'));
  const applicationData = {
    applicationStarted: true,
    aboutComplete: false,
    educationComplete: false,
    additionInfoComplete: false,
    policiesComplete: false,
  };

  try
  {
    setDoc(applicationRef, applicationData);
    return true;
  } catch (e)
  {
    console.error('Error writing document: ', e);
    return false;
  }
}