import { initializeApp } from 'firebase/app'

// Firebase web config is public by design (it identifies the project; access is
// controlled by Firebase Security Rules), so it is safe in client code.
// Add SDKs as needed: https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: 'AIzaSyBm8-GUYkezn2FZF3twtYLkan14OIGYBLg',
  authDomain: 'ae-seler.firebaseapp.com',
  projectId: 'ae-seler',
  storageBucket: 'ae-seler.firebasestorage.app',
  messagingSenderId: '281444178071',
  appId: '1:281444178071:web:f88a2c62cd61e005f631d2',
}

export const app = initializeApp(firebaseConfig)
