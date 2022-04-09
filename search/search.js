const firebaseConfig = {
    apiKey: "AIzaSyBkX8Az18ol6XhKi4W3lZOqYISu7IimALY",
    authDomain: "codemate-74748.firebaseapp.com",
    projectId: "codemate-74748",
    storageBucket: "codemate-74748.appspot.com",
    messagingSenderId: "632339682579",
    appId: "1:632339682579:web:cfd37835b1ee031cc836e6"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

// const find = document.querySelector('#username');
// db.collection('formdata').doc('name')
// {

// }


function cardGenerator(data) {
    return `<div class="wrapper">
             <div class="profile">
			<img src="../images/profile_pic.jpeg"
				class="thumbnail">
			<h3 class="name">${data.name}</h3>
		</div>

		<div class="social-icons">
			<div class="icon">
				<a href="https://www.codechef.com/users/${data.codechef}" target="_blank"><img class="codechef-logo"
						src="https://i.pinimg.com/originals/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6.jpg"></a>
			</div>

			<div class="icon">
				<a href="https://codeforces.com/profile/${data.codeforces}" target="_blank"><img class="codeforces-logo"
						src="https://cdn.iconscout.com/icon/free/png-256/code-forces-3521352-2944796.png"
						style="background:white;margin:10px"></a>
			</div>

			<div class="icon">
				<a href="https://leetcode.com/${data.leetcode}" target="_blank"><img class="codeforces-logo"
						src="https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png"
						style="background:white;margin:10px"></a>
			</div>

		</div>
		<div class="social-icons row-2">
			<div class="icon">
				<a href="https://www.hackerrank.com/${data.hackerrank}" target="_blank"><img class="codechef-logo"
						src="https://cdn.iconscout.com/icon/free/png-256/hackerrank-3521478-2944922.png"
						style="background:white;margin:10px"></a>
			</div>

			<div class="icon">
				<a href="https://atcoder.jp/users/${data.atcoder}" target="_blank"><img class="codeforces-logo" src="https://img.atcoder.jp/assets/atcoder.png"
						style="background:white;margin:10px"></a>
			</div>
		</div>
	</div > `;
}

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener('click', (e) => {
    // preventing default behaviour
    e.preventDefault();

    // finding current value in input field
    const fname = document.getElementById("searchbar").value;

    // refering the result
    const result = document.getElementById("result");
    result.replaceChildren("")
    // fetching data for that
    db.collection("formdata").where("name", "==", fname)
        .get()
        .then((querySnapshot) => {
            if (parseInt(querySnapshot.size) <= 0) {
                result.append("No user exists..")
            }
            console.log(querySnapshot);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // result.append(JSON.stringify(doc.data()));
                result.innerHTML += cardGenerator(doc.data());

                console.log(doc.id, " => ", doc.data());

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        })

})


