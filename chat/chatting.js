// const firebaseConfig = {
//     apiKey: "AIzaSyAKhQMjT1MvssZGqcSHKZu4EtI79k9EFfQ",
//     authDomain: "chatapp-final-8eae9.firebaseapp.com",
//     databaseURL: "https://chatapp-final-8eae9-default-rtdb.firebaseio.com",
//     projectId: "chatapp-final-8eae9",
//     storageBucket: "chatapp-final-8eae9.appspot.com",
//     messagingSenderId: "133062164796",
//     appId: "1:133062164796:web:081ca8edee814e3fd41e39",
//     measurementId: "G-K8MLPRRR9D"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyBkX8Az18ol6XhKi4W3lZOqYISu7IimALY",
  authDomain: "codemate-74748.firebaseapp.com",
  projectId: "codemate-74748",
  storageBucket: "codemate-74748.appspot.com",
  messagingSenderId: "632339682579",
  appId: "1:632339682579:web:cfd37835b1ee031cc836e6"
};

  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  const username = prompt("Enter your chat name. We wish to keep your data safe.");
  function sendMessage(e) {
    e.preventDefault();
  
    // get values to be submitted
    const timestamp = Date.now();
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value;
  
    // clear the input box
    messageInput.value = "";
  
    //auto scroll to bottom
    document
      .getElementById("messages")
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  
    // create db collection and send in the data
    db.ref("messages/" + timestamp).set({
      username,
      message,
    });
  }
  document.getElementById("message-form").addEventListener("submit", sendMessage);
  const fetchChat = db.ref("messages/");
  fetchChat.on("child_added", function (snapshot) {
    const messages = snapshot.val();
    const message = `<li class=${
      username === messages.username ? "sent" : "receive"
    }><span>${messages.username}: </span>${messages.message}</li>`;
    // append the message on the page
    document.getElementById("messages").innerHTML += message;
  });