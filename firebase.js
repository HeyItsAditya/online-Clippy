const urlParams = new URLSearchParams(window.location.search);
const clipKey = urlParams.get('key');
const database = firebase.database();

if (clipKey) {
	database.ref('/clips/' + clipKey).once('value').then(function(snapshot) {
		const text = snapshot.val();
		if (text) {
			document.getElementById("text").value = text;
