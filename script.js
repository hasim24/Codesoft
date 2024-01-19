let login = document.getElementById("login")
let error = document.querySelector(".error")
let username = document.getElementById("user")
let password = document.getElementById("pass")

login.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("button clicked")
    if (validate()) {
        window.location.href = "home.html";
    }
    else {
        return false
    }
})

function validate() {
    let user = username.value
    let pass = password.value
    if (user == "") {
        defeat(username, "Please enter username")
    }
    else {
        victory(username)
    }
    if (pass == "") {
        defeat(password, "Please enter password")
    }
    else if (pass.length < 8) {
        defeat(password, "password should be atleast 8 characters")
    }
    else {
        victory(password)
        return true
    }
   

}

function defeat(element, message) {
    let er = element.parentElement
    let err = er.querySelector(".error")
    err.innerHTML = message
}

function victory(element) {
    let er = element.parentElement
    let err = er.querySelector(".error")
    err.innerHTML = ""
}