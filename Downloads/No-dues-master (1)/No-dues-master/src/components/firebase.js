import firebase from "firebase"

// purane wala
// const firebaseConfig = {
//         apiKey: "AIzaSyDHxK3huS7eA_CqRnU171t6XbXGVS7cXUM",
//         authDomain: "library-project-4baae.firebaseapp.com",
//         projectId: "library-project-4baae",
//         storageBucket: "library-project-4baae.appspot.com",
//         messagingSenderId: "39566738243",
//         appId: "1:39566738243:web:ff74b6bff3e7728919e5f6"
//       };
const firebaseConfig = {
  apiKey: "AIzaSyBAJ4FDwv4bX0PG3NEePmqEsdhHkixs5Ww",
  authDomain: "no-dues-31b24.firebaseapp.com",
  projectId: "no-dues-31b24",
  storageBucket: "no-dues-31b24.appspot.com",
  messagingSenderId: "150460989186",
  appId: "1:150460989186:web:013a27a8d21bdc07e70c1b"
};


// const firebaseConfig = {
//   apiKey: "AIzaSyAmaJBb_U-fXblhH4zkSOk5KOdhww0lj3s",
//   authDomain: "no-dues-management-syste-f99b7.firebaseapp.com",
//   projectId: "no-dues-management-syste-f99b7",
//   storageBucket: "no-dues-management-syste-f99b7.appspot.com",
//   messagingSenderId: "618905747016",
//   appId: "1:618905747016:web:1afd6142d21e15ec62e27d",
//   measurementId: "G-JLJTN6BCE0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);




firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const storage = firebase.storage();

export { db, storage }
