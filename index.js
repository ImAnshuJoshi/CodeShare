// const firebaseConfig = {
//   apiKey: "AIzaSyAnb_KxEKlyrWhrWu8U5UFptRtJSr2vNZE",
//   authDomain: "fir-project-de85f.firebaseapp.com",
//   databaseURL: "https://fir-project-de85f-default-rtdb.firebaseio.com",
//   projectId: "fir-project-de85f",
//   storageBucket: "fir-project-de85f.appspot.com",
//   messagingSenderId: "1005835121360",
//   appId: "1:1005835121360:web:dca3f6f0624f06fdcda4d5",
//   measurementId: "G-K0C5PX9XEK"
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyBkX8Az18ol6XhKi4W3lZOqYISu7IimALY",
//   authDomain: "codemate-74748.firebaseapp.com",
//   projectId: "codemate-74748",
//   storageBucket: "codemate-74748.appspot.com",
//   messagingSenderId: "632339682579",
//   appId: "1:632339682579:web:cfd37835b1ee031cc836e6"
// };

  // firebase.initializeApp(firebaseConfig);
  function sendMessage(){
      const name=document.getElementById('name').value;
      const phone=document.getElementById('phone').value;
      const email=document.getElementById('email').value;
      const messages=document.getElementById('messages').value;
      firebase
      .database()
      .ref("Query")
      .set({
        "name": name,
        "phone":phone,
        "address": email,
        "messages":messages,
      })
      .then(() => {
        alert("We will get back to you Soon!");
      });
  }
  // document.getElementById('submitbtn').addEventListener('click',sendMessage());