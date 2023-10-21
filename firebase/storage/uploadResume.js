import { getFirebase } from '../firebase';
import { ref, uploadBytes } from 'firebase/storage';

const { storage } = getFirebase();

export default async function uploadResume(uid, file)
{
  const storageRef = ref(storage, `resumes/${uid}/resume.pdf`);
  
  try
  {
    await uploadBytes(storageRef, file);
    return true;
  }
  catch (e)
  {
    console.error('Error uploading resume: ', e);
    return false;
  }
}