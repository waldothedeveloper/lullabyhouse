import { RecaptchaVerifier, getAuth } from 'firebase/auth'

// import { getAnalytics } from 'firebase/analytics'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}
const isBrowser = typeof window !== `undefined`
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase
export const app = isBrowser ? initializeApp(firebaseConfig) : {}
// const analytics = getAnalytics(app)

export const auth = getAuth(app)
// auth.languageCode = window?.navigator?.language || 'us'
// window.recaptchaVerifier = new RecaptchaVerifier(
//   'sign-in-button',
//   {
//     size: 'normal',
//     callback: (response) => {
//       // reCAPTCHA solved, allow signInWithPhoneNumber.
//       // ...
//     },
//     'expired-callback': () => {
//       // Response expired. Ask user to solve reCAPTCHA again.
//       // ...
//     },
//   },
//   auth
// )
