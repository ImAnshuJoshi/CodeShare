const firebaseConfig = {
    apiKey: "AIzaSyBkX8Az18ol6XhKi4W3lZOqYISu7IimALY",
    authDomain: "codemate-74748.firebaseapp.com",
    projectId: "codemate-74748",
    storageBucket: "codemate-74748.appspot.com",
    messagingSenderId: "632339682579",
    appId: "1:632339682579:web:cfd37835b1ee031cc836e6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

// refering to the elements
const form = document.getElementById("my_form");
const submitBtn = document.getElementById("button");


// variable to access database collection
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("using btn")
    const name = document.getElementById("name").value;
    const hackerrank = document.getElementById("hackerrank").value
    const codechef = document.getElementById("codechef").value
    const codeforces = document.getElementById("codeforces").value
    const atcoder = document.getElementById("atcoder").value
    const leetcode = document.getElementById("leetcode").value
    const db = firestore.collection("formdata")
    db.add({ name: name, hackerrank: hackerrank, codechef: codechef, codeforces: codeforces, atcoder: atcoder, leetcode: leetcode })
    updateprof();
    // alert("Your profile is being updated")
})
function updateprof() {

    var x = document.getElementById("update_status");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}