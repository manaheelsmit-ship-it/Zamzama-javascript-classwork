function text() {
    document.getElementById("product").className = "box2"
}
function getData(event) {
    event.preventDefault()
    var email = document.getElementById("exampleInputEmail1").value
    var password = document.getElementById("exampleInputPassword1").value
    console.log(email, password)
}
function change(){
    document.getElementById("image").src="./img2.jp"
}