function text() {
    document.getElementById("product").className = "box2"
}
function getData(event) {
    event.preventDefault()
    var email = document.getElementById("exampleInputEmail1").value
    var password = document.getElementById("exampleInputPassword1").value
    console.log(email, password)
}

function change(id,changePic){
  var picture =   document.getElementById(id);
  picture.src = changePic
}

function changetext(){
    document.getElementById("text").style.fontSize = "30px"

}

const changeText =  document.getElementsByTagName("p")
changeText[1].style.backgroundColor = "blue"