document.addEventListener("DOMContentLoaded", () => {

const email= document.querySelector("#email")
const password= document.querySelector("#password")
const submit= document.querySelector("#submit")

const checkInput = () => {

	if (email.value !== "" && password.value !== "") {
		submit.disabled = ""
	}
	else{
		submit.disabled = "disabled"
	}
}
email.addEventListener ("change", checkInput)
password.addEventListener ("change", checkInput)
})
