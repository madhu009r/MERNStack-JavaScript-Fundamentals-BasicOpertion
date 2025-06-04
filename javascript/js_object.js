



// let myDetails ={
//     name:"Aakil",
//     age:20,
//     location:"Pollachi"
// }

// console.log(myDetails.age)

const myTeams = {
    first: "Gopal",
    second: "Vivek",
    third: "Aakil",
    last: "Rithu",
    designation : {
        first: "Java Full Stack dev",
        second: "schooling",
        third: "police",
        last: "Intern",
        locations : {
            first: "TN",
            second: "CBE",
            third: "POLL",
            last: "Nm"
        }
    }
}
 
// console.log('parent object',myFriends)
// console.log('designation', myFriends.designation)
// console.log('locations', myFriends.designation.locations)
 
// console.log('designation', myFriends["designation"])
// console.log('locations', myFriends["designation"]["locations"])
 
myFriends.designation.locations.third = "TRI"
console.log(myFriends)
 





function myDetails(fname,age,city,profession) {
    this.firstName = fname,
    this.age = age,
    this.city = city,
    this.profession = profession
}
 
const myFather = new myDetails("Pardeep", 55, "Vaishali", "Farmer")
const myMother = new myDetails("Santoshi", 53, "Vaishali", "Politician" )
myFather.nation = "India"
console.log(myFather)
console.log(myMothe)