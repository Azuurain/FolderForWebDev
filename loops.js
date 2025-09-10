var friends = ['Andrew', 'Amanda', 'Ariel', 'Maya', 'Eddie', 'Matt', 'Josh'];

for (var i = 0; i < friends.length; i++) {
    console.log(i);

    if(friends[i] == 'Amanda') {
        console.log("found her!");
    }
}

var count = 0;

if (count == 0) {
    console.log('Count Starts Here:');
}

while (count < friends.length){
    console.log(friends[count]);
    count++;

}

do {
    console.log('test');
} while(false);