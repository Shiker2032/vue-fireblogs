var firebaseConfig = {
  apiKey: "AIzaSyAqxVeK2Oco2uWYyy-fVb7CDwpBRF7ymco",
  authDomain: "fireblogs-61238.firebaseapp.com",
  projectId: "fireblogs-61238",
  storageBucket: "fireblogs-61238.appspot.com",
  messagingSenderId: "32197256393",
  appId: "1:32197256393:web:e8afe426c44be6a2bb5918",
}

import firebase from "firebase/app"
import "firebase/firestore"

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { timestamp }
export default firebaseApp.firestore()
