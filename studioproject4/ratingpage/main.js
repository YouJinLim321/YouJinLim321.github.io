const root = document.getElementById("root");
const ratingField = document.getElementById("rating-field");
const submitButton = document.getElementById("submit-button");

const message = document.createElement("h1");
message.className = "heading";

ratingField.addEventListener("change", (event) => {
	if (Number(event.target.value) < 3) {
		message.textContent = "We\u2019re sorry to hear that.";
	} else if (Number(event.target.value) === 5) {
		message.textContent = "Glad you liked it!";
	} else {
		message.textContent = "Thank you!";
	}
});

submitButton.addEventListener("click", () => {
	ratingField.style.display = "none";
	root.appendChild(message);
});
