import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyChlOMvCtrq-aa6Uk2d7RNvS0BQ5nAZ2_g",
    authDomain: "dhaval-todo-app.firebaseapp.com",
    projectId: "dhaval-todo-app",
    storageBucket: "dhaval-todo-app.appspot.com",
    messagingSenderId: "1335798219",
    appId: "1:1335798219:web:fe5d3789b410d63296ae4e"
  };


const app = initializeApp(firebaseConfig);

export default app;