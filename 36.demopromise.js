
// const p1 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("success")
//     }, 1000);
// })

// const p2 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject("success1")
//     }, 300);
// })

// Promise.allSettled([p1,p2]).then(console.log).catch(console.log)


// p1.then(console.log)
// p2.catch(console.log)


// const f1 = (val,peru) => {
// return peru(val + 10)
// }
// const peru =(val) => {
// return val + 20;
// }
// console.log(f1(1,peru))
// let tea = 10
// let punch = 20
// let cofee = 30

function functionarea(tea,punch,cofee) {
return tea+punch+cofee;
}

let area = functionarea(10,20,40)
console.log (`The total value is : ${area}`)
