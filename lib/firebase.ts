// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAx6zPgUmUjeRzb6Kfies4RAy_J3ohWX4A',
  authDomain: 'gallerymaker-39bc2.firebaseapp.com',
  projectId: 'gallerymaker-39bc2',
  storageBucket: 'gallerymaker-39bc2.appspot.com',
  messagingSenderId: '522295848887',
  appId: '1:522295848887:web:95d75ae82e36a22882c232',
  measurementId: 'G-TB5JD6PNXZ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const getFirestoreApp = () => {
  return getFirestore(app)
}

export const getStorageApp = () => {
  return getStorage(app)
}
