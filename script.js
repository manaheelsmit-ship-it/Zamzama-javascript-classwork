// // // // // // alert("hello world")
// // // // // var userName = "sana"; //variable creation 
// // // // // var lastName; //declare 
// // // // // lastName = "farooq"; //initalization 
// // // // // console.log(lastname)
// // // // // var string = "name";
// // // // // var number = 23;
// // // // // var boolean = true;

// // // // // console.log(typeof number);


// // // // // var num_1 =12;
// // // // // var num2 = 20;
// // // // // var total = num1 +num2;
// // // // // console.log(total);
// // // // // var name = "usser"
// // // // // console.log(name)

// // // // var num1  = 2
// // // // console.log(num1++) //29
// // // // console.log(++num1) //30
// // // // console.log(num1++) //31
// // // // console.log(++num1) //31
// // // // // console.log(num1++) //34
// // // // // console.log(++num1) //34
// // // // // console.log(num1) //8




// // // // var num1 = 8

// // // // console.log(num1--) //8
// // // // console.log(num1--)//7
// // // // console.log(num1--)//6
// // // // console.log(num1++) //5
// // // // console.log(--num1) //5
// // // // console.log(num1++)//5
// // // // console.log(num1++) //6
// // // // console.log(--num1) //6
// // // // console.log(num1++) //6
// // // // console.log(num1--)//7
// // // // console.log(--num1) //5
// // // // console.log(num1)//5



// // // // var num1 3
// // // // console.log((num1 +4 =)+ (num1 *2) + (num1 -5) + (num1 +9) + (num1* 2))

// // // // var userName = prompt("enter your name")
// // // // console.log(userName)
// // // // alert("welcome "+userName+", to our website")
// // // // var number = prompt("enter a number")
// // // // if(number == 6){
// // // //     console.log("you are allowed")
// // // // }else{
// // // //     console.log("you are not allowed")
// // // // }


// // // //  = for assigning a variable
// // // //  == just compare l.h.s or r.h.s
// // // //  === compare type and value both

// // // //  !=  just compare l.h.s or r.h.s
// // // //  !== compare type and value both

// // // //  >=
// // // //  <=

// // // //  <
// // // //  >
// // // // var userName = "sana";
// // // // if (10<=5) {
// // // //     console.log("you are allowed")
// // // // }
// // // // else {  
// // // //     console.log("you are not allowed")
// // // // }

// // // // var age = prompt("what's your age ??");
// // // // var grade = prompt("what's your grade")
// // // // var userName = prompt("what's ypur name ")
// // // // if (age >= 18 || grade === "A"){
// // // //     if(userName === "hifza" ){
// // // //             alert("you are in 10 class")
// // // //     }
// // // // }else if(age >= 20){
// // // //     alert("you are in intermediate")
// // // // } else if (age >= 23 ){
// // // //     alert("congratualtion!! you are graduated")
// // // // }
// // // // else{
// // // //     alert("not allowed")
// // // // }
// // // var detail = ["sana", 23, "A", true]
// // // detail[3] = false
// // // detail.pop()
// // // detail.push("90%", "Pass")
// // // detail.shift()
// // // detail.unshift("muskan")
// // // detail.splice(3,0,"80%")
// // // console.log(detail)
// // // var copy = detail.slice(1,5)
// // // console.log(copy)
// // // var array =[]
// // // array = []


// // // var array1 = ["apple ", "banana", "grapes"]
// // // var array2 = ["red", "blue", "yellow"]
// // // for (let i = 0; i <= array1.length; i++){
// // //    for (let j = 0 ; j<= array2.length; j++){
// // //     console.log(array1[i], array2[j])
// // //    }
// // // }
// // var array = ["red", "blue", "yellow"]
// // for (var i = 0; i < array.length; i++) {
// //    console.log(array[i])
// // }
// // function marksheet(sub1, sub2, sub3) {
// //    var totalMarks = 300
// //    var obMarks = sub1 + sub2 + sub3
// //    var percentage = obMarks / totalMarks * 100
// //    console.log(percentage)
// //    if (percentage > 80) {
// //       console.log("A+", "Good work")
// //    } else if (percentage > 70) {
// //       console.log("A", "Good work")
// //    }
// //    else if (percentage > 60) {
// //       console.log("B", "Good work")
// //    }
// //    else if (percentage > 50) {
// //       console.log("C", "Good work")
// //    } else {
// //       console.log("F", "You are fail ")
// //    }
// // }
// // marksheet(45,76,87)
// // marksheet(20,49,80)






// // marksheet()

// // function getData() {

// //    var tea = 1 + 2 + 1
// //    return tea
// // }
// // var result = getData()
// // console.log(result)
// // console.log(getData())
// // getData()



// // var num = 5
// // switch (num) {
// //    case 6:
// //       alert("not found")
// //    case 5:
// //       alert("not found")
// //       break;
// //    case 3:
// //       alert(" found it")
// //       break;
// //    case 2:
// //       alert("not found")
// //       break;
// //    case 9:
// //       alert("not found")
// //       break;
// //    default:
// //       alert("sorry")
// // }

// // function add(){
// //    var adds = 8
// //    console.log(adds)
// // }
// // add()


// function multiple() {
//    var news = 8
//    var add = 6
//    var sub = news + add
//    console.log(sub)
// }
// multiple()
// var num1 = prompt("enter 1 number")
// var num2 = prompt("enter 2 number")
// var num3 = prompt("enter 3 number")
// var array = []
// array.push(num1)
// array.push(num2)
// array.push(num3)
// console.log(array)
// for (var i = 0; i < array.length; i++) {
//    for (var j = 1; j < array.length; j++) {
//       if (i !== j) {
//         var final=  array.splice(array[j])
//       } else {
//          alert("no")
//       }
//    }
// }
// console.log(final)

// var i = 0
// while (i < 0) {
//    console.log(i)
//    i++;
// }

var j = 6;
do {
   console.log(j);
   j++;
} while (j < 6);



/*var number = 5
while (number < 6) {
   number++
}*/