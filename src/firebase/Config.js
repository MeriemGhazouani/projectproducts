import firebase from 'firebase'
// import "firebase/storage"
var firebaseConfig = {
  apiKey: "AIzaSyANYDzu52gYXP6G_2S1LYt764Bm86VWhXg",
  authDomain: "productmanager-784cc.firebaseapp.com",
  databaseURL: "https://productmanager-784cc.firebaseio.com",
  projectId: "productmanager-784cc",
  storageBucket: "productmanager-784cc.appspot.com",
  messagingSenderId: "365724843222",
  appId: "1:365724843222:web:cd9e2d2d370f1882035d77"
};
// Initialize Firebase
export const store =firebase.initializeApp(firebaseConfig);
const db=store.firestore()
  export {db}