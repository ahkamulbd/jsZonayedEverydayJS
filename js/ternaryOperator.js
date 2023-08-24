const age = 21;

if (age < 18) {
    //console.log(`You are not adult.`);
}
else {
    //console.log(`You are adult.`);
}

//console.log(age < 18 ? `You are not adult` : `You are adult`);

const result = age < 18 ? `You are not adult` : `You are adult`;
//console.log(result);

function findMessi(footballer) {
    return (footballer === 'Messi' ? `It's Messi` : `Not Messi at all !`);
}
// console.log(findMessi('Messi'));
// console.log(findMessi('Ronaldo'));

function gettingEmail() {
    console.log('Received your email with many thanks.')
}
//let email;
let email = 'abc@gmail.com';

email ? gettingEmail() : console.log(`Please send your email asap.`);