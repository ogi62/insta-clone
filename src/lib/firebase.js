import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// here i want to import the seed file
import { seedDatabase } from "../seed";

const config = {
    apiKey: "AIzaSyCv7Zz7bbI0XbyapbwfApJ5eySmOSCKFyo",
    authDomain: "instagram-clone-44a24.firebaseapp.com",
    projectId: "instagram-clone-44a24",
    storageBucket: "instagram-clone-44a24.appspot.com",
    messagingSenderId: "444499249929",
    appId: "1:444499249929:web:a1f8484d27b29abbc221d8"
  };

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where i want to call the seed file ( Only ONCE !!! )

// ONLY ONCE TO PUSH DATA IN DATABASE !!!!
// seedDatabase(firebase);


export { firebase, FieldValue };
