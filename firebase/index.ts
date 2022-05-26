import { initializeApp } from "firebase/app";
import { get, child, set, ref, onValue } from "firebase/database";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

export async function setValue(
  path: string,
  value: string | null | Record<string | number, any>,
  returnValue: any = null
) {
  await set(ref(database, path), value);
  return returnValue;
}

export async function getOnceValue(path: string) {
  return get(child(ref(database), path)).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
    }
  });
}

export function getRef(path: string) {
  return ref(database, path);
}

export function getValue(path: string, setValue: (value: any) => void) {
  onValue(getRef(path), (snapshot) => {
    const data = snapshot.val();
    if (data) {
      setValue(Object.entries(data));
    }
  });
}
