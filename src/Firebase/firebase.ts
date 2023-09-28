import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD5rp4IMGPzMckj9mAlndcBtsfht4Gkgkc',
  authDomain: 'book-catalog-45cf9.firebaseapp.com',
  projectId: 'book-catalog-45cf9',
  storageBucket: 'book-catalog-45cf9.appspot.com',
  messagingSenderId: '100086736090',
  appId: '1:100086736090:web:e87cb839913e26f26631e3',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
