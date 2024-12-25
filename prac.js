// Q1 . destructure the array into name age and car and log
// 'ram of age 21 owns bmw'
const user = ['ram', 21, 'mer']

// console.log(user[0] + 'of age' + user[1]+ 'owns'+ user[2])

const [name , age , car] = user;
console.log(`${name} of age ${age} owns ${car}`);