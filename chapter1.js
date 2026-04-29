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




// var array = [
//     {
//         name: "userName",
//         age: 12,
//         class: 5,
//         gender: "male",
//         subjects: ['math', 'urdu', 'islamiat'],
//         method: function () {
//             console.log(this.name, this.age, " he can eat ")
//         },
//     },
//     {
//         name: "admin",
//         age: 12,
//         class: 5,
//         gender: "male",
//         subjects: ['math', 'urdu', 'islamiat'],
//         method: function () {
//             console.log(this.name, this.age, " he can eat ")
//         },
//     },
// ]
// console.log(array[1].class)
// var plan1 = {
//     name: "basic",
//     rate: "20$",
//     quantity: "20 pages"
// }
// var plan2 = {
//     name: "pro",
//     rate: "40$",
//     quantity: "40 pages"
// }
// var plan3 = {
//     name: "premium",
//     rate: "60$",
//     quantity: "60 pages"
// }
function Plan(name, rate, quantity) {
  this.name = name,
    this.rate = rate,
    this.quantity = quantity,
    this.method = function () {
      return this.rate * 2
    }
}
// var plan1 = new Plan("basic", 20, "20pages")
// console.log(plan1)
// var object = {
//     name: "userName",
//     age: 12,
//     class: 5,
//     gender: "male",
//     subjects: ['math', 'urdu', 'islamiat'],
//     method: function () {
//         console.log(this.name, this.age, " he can eat ")
//     },
// },

// function data (name, age, classes){
//     this.name = name,
//     this.age = age,
//     this.class = classes,
//     this.method = function(){
//         console.log(this.name, this.age, " he can eat ")
//     }
// }

// let user = (a, b) => { console.log(a + b) }
// user(3, 5)


// let userData = {
//     name: "john",
//     age: 12,
//     method:  ()=> {
//         let user = () => {
//             console.log(this.name, this.age)
//         }
//         user()
//     }
// }

// userData.method()


// function User(name = "john", age = 12) {
//     console.log(name, age)
// }

// User()

//spread operators


// var array1 = [5, 8, 9, 6]
// var array2 = [1, 2, 3, ...array1]
// var array3 = [1, 3, ...array1, ...array2]
// console.log(array3)

// const male = {
//     age: 20,
//     class: 12
// }
// const female = {
//     age: 16,
//     class: 10
// }
// const maleUser = {
//     ...male,
//     age: 10
// }
// const femaleUser = {
//     ...female,
//     name: "sana"
// }
// console.log(maleUser)
// const userName = "john"
// console.log([...userName])
// // ["john"]

//rest operators 

// function userData(...data){
//     console.log(data)
// }
// userData("admin", "john")
// const user = {
//     name: "john",
//     age: 20,
//     gender: "male"
// }
// const { name, ...other } = user
// console.log(name)
// console.log(other)


// function data(a, b, ...rest) { //rest operator
//     console.log(a)
//     console.log(b)
//     console.log(rest)
// }
// var arr = [1, 2, 3, 4, 5, 6]
// data(...arr) // spread operator


// var userName = "john"
// console.log(userName.toLowerCase())
// var text = "my name is john. my father name is ! admin "
// // console.log(text.indexOf("is"))
// // console.log(text.lastIndexOf("is"))
// // console.log(text.charAt(4))
// for (var i = 0; i < text.length; i++) {
//     if (text.charAt(i) === "!") {
//         console.log("Exclamation point found!");
//         break;
//     }
// }
// var result = text.replace("john", "sana")
// console.log(result)
// var rounds = Math.ceil(1.567)
// console.log(rounds)
// console.log(Math.random()*200)
// var num = "12"
// console.log(typeof(num))
// console.log(typeof(parseInt(num)))
// var num2 = "98"
// console.log(typeof(num2))
// console.log(Number(num2))

// function data(num1, num2, num3) {
//     var num = num1 + num2 + num3
//     return num
// }
// var result = data(2, 3, 4)
// console.log(result)

// const users = ["Ali", "Sara", "Ahmed"];
// for (var i = 0; i < users.length; i++) {
//     console.log(users[i])
// }
// users.forEach((data, index) => {
//     console.log(data, index)
// })
// const prices = [100, 200, 300];
// const discounted = prices.map(price => price * 0.9);
// console.log(discounted);
// const numbers = [10, 20, 30, 40];
// const result = numbers.filter(n => n > 20);
// console.log(result);

// const users=[{id:1},{id:2}];
// const user = users.find(u=>u.id===2);
// console.log(user);


// const data = [
//     {
//         name:"john",
//         age:20,
//         class:10
//     }
//     ,{
//         name :"admin",
//         age:30,
//         class:16
//     }

// ]
// const findout = data.find(n=> n.age===30);
// console.log(findout)

// const nums=[1,3,5,8];

// console.log(nums.some(n=>n%2===0));
// const arr=["JS","React"];
// console.log(arr.includes("Manahil"));
// const nums=[5,2,9];
// nums.sort((a,b)=>b-a);
// console.log(nums);
// function greet(name) {
//   console.log("Hello " + name);
// }

// function processUser(callback) {
//   const username = "Ali";
//   callback(username);  
// }
// processUser(greet);




// function userName(data){
//     console.log("hello "+ data)
// }

// function welcome(userData){
//     const lastName = "john"
//     userData(lastName)
// }
// welcome(userName)




// const array = [1,[2,[3,[6,[8], [9]]]]]
// console.log(array.flat(4))


// orderfood(recipe(waiter(eatfood)))


// function orderFood(order){
//     console.log("i  want to order pasta")
//     order("okay we will make your dish ")
// }
// function kitchen(data){ //parameter
//     console.log(data)
// }


// orderFood(kitchen)





// function outer() {
//   let name = "Manaheel";

//   function inner() {
//     console.log(name);
//   }

//   return inner;
// }

// const myFunc = outer();

// myFunc();





// function counter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const increment = counter();

// increment();
// increment();
// increment();

// function bankAccount() {
//   let balance = 1000;

//   return {
//     deposit(amount) {
//       balance += amount;
//       console.log(balance);
//     },
//     withdraw(amount) {
//       balance -= amount;
//       console.log(balance);
//     },
//     balance
//   };
// }

// const account = bankAccount();

// account.deposit(500);
// account.withdraw(200);
// console.log(account.balance)



const mySet = new Set([1,1,3,4,2, 2, 3, 3]);
console.log(mySet.add(5))
mySet.delete(2)
console.log(mySet.has(2))
mySet.clear()
console.log(mySet.size)
console.log(mySet)

const myMap = new Map([
  ["name", "john"],
  ["age",32]
])
myMap.set("city", "karachi")
console.log(myMap.get("name"))
console.log(myMap.has("age"))
console.log(myMap.delete("age"))
myMap.clear()
console.log(myMap.size)
console.log(myMap)
