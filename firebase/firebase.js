import { getApps, initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DB_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

function initializeServices()
{
    const isConfigured = getApps().length > 0;
    const firebaseApp = initializeApp(config);;
    const db = getFirestore(firebaseApp);
    const auth = getAuth(firebaseApp);
    return { firebaseApp, db, auth, isConfigured };
}

function connectEmulators({ auth, db })
{
    connectFirestoreEmulator(db, 'http://localhost:8090');
    connectAuthEmulator(auth, 'http://localhost:9099');
}

export function getFirebase()
{
    const services = initializeServices();
    if (!services.isConfigured)
    {
        console.log('emulators connecting');
        connectEmulators(services);
    }
    return services;
}