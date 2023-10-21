import { ref, getDownloadURL } from 'firebase/storage';
import { getFirebase } from '../firebase';
const { storage } = getFirebase();

export default function checkIfFileExists(uid) {
  const storageRef = ref(storage, `resumes/${uid}/resume.pdf`);

  getDownloadURL(storageRef)
    .then(url => {
      return Promise.resolve(true);
    })
    .catch(error => {
      if (error.code === 'storage/object-not-found') {
        return Promise.resolve(false);
      } else {
        return Promise.reject(error);
      }
    });
}
