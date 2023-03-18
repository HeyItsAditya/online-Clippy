const firebaseConfig = {
	apiKey: "YOUR_API_KEY",
	authDomain: "YOUR_AUTH_DOMAIN",
	projectId: "YOUR_PROJECT_ID",
	storageBucket: "YOUR_STORAGE_BUCKET",
	messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
	appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const copyBtn = document.getElementById("copy-btn");
const status = document.getElementById("status");
const keyEl = document.getElementById("key");

copyBtn.addEventListener("click", function() {
	const text = document.getElementById("text").value;
	if (text !== "") {
		const key = database.ref("clips").push().key;
		const updates = {};
		updates['/clips/' + key] = text;
		database.ref().update(updates, function(error) {
			if (error) {
				status.innerHTML = "Failed to copy to clipboard";
				status.style.color = "red";
			} else {
				keyEl.innerHTML = "Your key: " + key;
				keyEl.style.color = "green";
				status.innerHTML = "Copied to clipboard!";
				status.style.color = "green";
			}
		});
	}
});
