const username = "aldi"
const password = "123"

function auth(){
    let userinput = document.getElementById("username").value
    let passwordinput = document.getElementById("password").value

    let form = document.getElementById('form')

    if (username == userinput && password == passwordinput){
        alert("Login berhasil")
        form.submit()
    }else {
        alert("Login Gagal!")
    }
}