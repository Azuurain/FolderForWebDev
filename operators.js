var a = 5+7;

var b = 'Hello ' + 'World';

var c = a + b;

var d = a==b;

var val1 = 5;
var val2 = 5;

val1 += val2; // val1 = val1 + val2
val1 -= val2; // val1 = val1 - val2
val1 *= val2; // val1 = val1 * val2 
val1 /= val2; // val1 = val1 / val2
val1 %= val2; // val1 = val1 % val2
val1 **= val2; // val1 = val1 to the power of val2
val1++; // val1 = val1 + 1
val1--; // val1 = val1 - 1
val1 = -val1; // negation
val1 = +val1; // unary plus (no effect here, but converts to number if not already)

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(val1);

