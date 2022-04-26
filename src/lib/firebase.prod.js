import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCKXncO3DKXT27OS_XpJF7Z99hNleUoet8',
  authDomain: 'netflix-clone-55b1b.firebaseapp.com',
  projectId: 'netflix-clone-55b1b',
  storageBucket: 'netflix-clone-55b1b.appspot.com',
  databaseURL: 'https://netflix-clone-55b1b-default-rtdb.firebaseio.com/',
  messagingSenderId: '589319501473',
  appId: '1:589319501473:web:dd4482a02daf5f963b62e0',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
