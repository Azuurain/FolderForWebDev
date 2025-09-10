var val = 50.5;
if(val ==50 && val < 51) {
    console.log("on the money!");
} else if (val > 49 && val < 100) {
    console.log("between 50 and 100");
} else {
    console.log("Not quite on the money :/");
}

switch (val) {
    case 50:
        console.log('50');
        break;
    default:
        console.log('default');
        break;
}


console.log('Ended Program');
