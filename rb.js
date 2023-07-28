function nav_register() {
    location.assign('./signup.html')
}
function nav_login() {
    location.assign('./login.html')
}


let data=JSON.parse(localStorage.getItem(`userdetails`))
let userName = document.querySelector(`.user-name`)
userName.textContent = `Hello,` + data.name