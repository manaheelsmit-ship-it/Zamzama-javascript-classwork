// function text() {
//     document.getElementById("product").className = "box2"
// }
// function getData(event) {
//     event.preventDefault()
//     var email = document.getElementById("exampleInputEmail1").value
//     var password = document.getElementById("exampleInputPassword1").value
//     console.log(email, password)
// }

// function change(id,changePic){
//   var picture =   document.getElementById(id);
//   picture.src = changePic
// }

// function changetext(){
//     document.getElementById("text").style.fontSize = "30px"

// }

// const changeText =  document.getElementsByTagName("p")
// changeText[1].style.backgroundColor = "blue"



// var userName = 'john'
// var userName = 'admin '
// userName = ' xfijshz'
// let lastName = ' john'
// lastName = ' admin '
// const age = 12


// console.log("i am " + age + " years old")
// console.log(`i am ${age} ${lastName} years old`)



// var userName = prompt("what is your name ??")
// var studentData = {
//     name: userName,
//     age: 12,
//     class: 5,
//     gender: "male",
//     subjects: ['math', 'urdu', 'islamiat'],
//     method: function () {
//         console.log(this.name, this.age, " he can eat ")
//     },
// }
// studentData.age = 15
// studentData.school = "ABC School"
// delete studentData.class
// studentData.method()
// console.log(studentData)




var array = [
    {
        name: "userName",
        age: 12,
        class: 5,
        gender: "male",
        subjects: ['math', 'urdu', 'islamiat'],
        method: function () {
            console.log(this.name, this.age, " he can eat ")
        },
    },
    {
        name: "admin",
        age: 12,
        class: 5,
        gender: "male",
        subjects: ['math', 'urdu', 'islamiat'],
        method: function () {
            console.log(this.name, this.age, " he can eat ")
        },
    },
]
console.log(array[1].class)