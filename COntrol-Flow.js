if (true) { console.log('truthy!');
} else { console.log('falsy!');
}

 console.log(0 === true);

let x = 1 ; 
while (x <= 10) {
    var msg = 'Item' + x;
    console.log(msg);
    x++;
}

val = 1

if (val === 1) {
    console.log('they are the same '); 
}

x = true

if (x === false){
    console.log('seems like it is true ');
} else {
    console.log('Nah be this aint it ')
}

val = 2 

if (val === 1) {
    console.log('The two values match')
} else{
    console.log('Looks like it could be a different value'); 
}

let val = 4;

if (val === 1){
    console.log('The value is one ')
} else if (val === 2 ){
    console.log('Looks like it is actually two over here')
} else if ( val === 3){
    console.log('These values right here match');
}else {
    console.log('The value seems to be greater than 3 '); 
};

let light = 'green';

if (light === 'green'){
    console.log('GO')
} else if (light === 'yellow'){
    console.log('SLOW')
}else if (light === 'red'){
    console.log('STOP')
}else {
    console.log('Whatever')
}

let word = '';
let words = [];
while (word !== 'end') {
word = prompt('Enter a word ("end" to quit)'); if (word !== 'end') words.push(word); alert("You've entered: " + words.join(', '));
}


//  do....while 

let num = 0;
do {
console.log(num + ' is even'); num += 2;
} while (num <= 10);

//  for looops 

let colors = ['red', 'white', 'blue'];
for (let idx = 0; idx < colors.length; idx++) {
console.log(colors[idx]); }


// breaking a loop 
let word = '';
let words = [];
while (true) {
word = prompt('Enter a word ("end" to quit)'); if (word === 'end') break;
words.push(word);
alert("You've entered: " + words.join(', '));
}

let choice = 'a';
let choices = [];

while(true) {
    choice = prompt('Enter a, b, or c'); if (choice === 'a' ){
        console.log('a is for apple')
    }else if (choice === 'b'){
        console.log('b is for banana')
    }else if (choice === 'c'){
        console.log('c is for cantaloupe')
    }else{
        console.log("no more fruit ")
    }
}; 



let message = score > 100 ? "You rock!" : "Keep trying!";

