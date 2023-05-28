// Link documents: https://firebase.google.com/docs/web/learn-more?hl=en&authuser=0#add-sdks-cdn
// Link document firestore: https://firebase.google.com/docs/firestore/quickstart?authuser=0&hl=en


// Rules:
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write;
//     }
//   }
// }



import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js"
import { getFirestore, collection, getDocs, addDoc, doc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js"


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


const db = getFirestore(app);

// lấy toàn bộ thông tin (documents) của 1 collection
// const querySnapshot = await getDocs(collection(db, "student"));
// querySnapshot.forEach((doc) => {
//   console.log(doc.data());
// });

// thêm 1 dòng (document) vào collection
document.getElementById("addVideo").onclick = async () => {
  try {
    const docRef = await addDoc(collection(db, "student"), {
      name: "Minh Khai",
      age: 20,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


// query lấy 1 documents
// delete 1 document trong 1 selection
// update 1 document trong 1 selection

