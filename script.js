// OBJECTS

// let user2 = new Object()
// console.log(user2);
// user2.name = 'Bobur'
// user2.address = 'Samarqand'
// user2.isTeacher = true

// console.log(user2['name']);

let tb = document.querySelector('tbody')
let user = {
    name:'Bobur',
    age:'35',
    address:'Samarqand',
    isTeacher:true,
    byear:function(){
        return 2024 - this.age
    }
}
console.log(user.byear());
console.log(Bobur.byear());

// for (const user in user){
//     let tr = document.createElement('tr')
//     tr.innerHTML = `
//     <td>${key}</td>
//     <td>${user[key]}</td>
//     `

//     tb.append(tr)
//     console.log(user[key]);
//     console.log(user[key]);
// }

// let u = new User('sardor',1998,'Samarqand',)
// let u2 = new User('Dilshod',1989,'Samarqand',)
// console.log(u);

// OOP CLASSlar

// class User {
//     constructor(name,year,address){
//         this.name = name
//         this.year = year
//         this.address = address
//     }
//     age() {
//         return 2024 - this.year
//     }
// }

class User {
    constructor(name,year){
        this.name = name
        this.year = year
    }

age() {return 2024 - this.year }
}
let frm = document.querySelector('form')
let users = []
frm.addEventListener('sumbit',(e)=>{
  e.preventDefault()
  let u = new User (
    frm.ism.value,
    frm.year.value
  )
  users.push(u)
  render(users)
})

function render(users){
    tb.innerHTML = ''
    users.map((item) => {
     let tr = document.createElement('tr')
     tr.innerHTML = `
     <td>${item.name}</td>
     <td>${item.age}</td>
     `

     tb.append(tr)
    })

}
