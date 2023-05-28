// Link documents: https://firebase.google.com/docs/web/learn-more?hl=en&authuser=0#add-sdks-cdn
// Link documents về authentication: https://firebase.google.com/docs/auth/web/start?authuser=0
// Link sign out: https://firebase.google.com/docs/auth/web/password-auth

// Github Form login + register hoàn chỉnh, các bạn tự xem và chạy thử: https://github.com/mindxDoc/JSI/tree/main/Day%204%2B5%2B6%2B7


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, FacebookAuthProvider, signInWithPopup, signInWithRedirect } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAundNlhGokvNufSGHi88sgorit6war410",
  authDomain: "study-authentication-e905d.firebaseapp.com",
  projectId: "study-authentication-e905d",
  storageBucket: "study-authentication-e905d.appspot.com",
  messagingSenderId: "824022726305",
  appId: "1:824022726305:web:6923b8c62e4e7df79862e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

document.getElementById("testBtn").onclick = () => {
  // ĐĂNG KÝ
  // createUserWithEmailAndPassword(auth, "thongnguyen@gmail.com", "123456789")
  //   .then((userCredential) => {
  //     // Signed in 
  //     const user = userCredential.user;

  //     console.log("user: ", user)
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;

  //     console.log("errorMessage: ", errorMessage)
  //     // ..
  //   });


  // ĐĂNG NHẬP
  // signInWithEmailAndPassword(auth, "thongnguyen@gmail.com", "123456789")
  //   .then((userCredential) => {
  //     // Signed in 
  //     const user = userCredential.user;
  //     console.log("user: ", user)
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log("errorMessage: ", errorMessage)
  //   });

  // ĐĂNG XUẤT
  // signOut(auth).then(() => {
  //   // Sign-out successful.
  // }).catch((error) => {
  //   // An error happened.
  // });

  // ĐĂNG NHẬP FACEBOOK
  // const provider = new FacebookAuthProvider();

  // signInWithPopup(auth, provider)
  // .then((result) => {
  //   // The signed-in user info.
  //   const user = result.user;

  //   // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  //   const credential = FacebookAuthProvider.credentialFromResult(result);
  //   const accessToken = credential.accessToken;

  //   // IdP data available using getAdditionalUserInfo(result)
  //   // ...
  // })
  // .catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = FacebookAuthProvider.credentialFromError(error);

  //   // ...
  // });

  // signInWithRedirect(auth, provider);
}



onAuthStateChanged(auth, (user) => { // => Công dụng: xác định web của mình đã có người đăng nhập hay chưa ?
  if (user) { // nếu có => chạy vô if này
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("user: ", user)
    // ...
  } else { // nếu không, chạy vô else này
    // User is signed out
    // ...
    console.log("not have any signed in user !")
  }
});