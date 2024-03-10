let array1 = [1, 2, 3, 4, 5];
let array2 = ['a', 'b', 'c', 'd', 'e'];
let array3 = [true, false, true, false, true];
let array4 = ['maça', 'banana', 'melancia', 'uva', 'goaba'];
let array5 = [10, 20, 30, 40, 50];

array1[1] = array5[2];

array2[1] = array4[1];

array3.push(array1[4], array2[4], array4[4], array5[4]);

console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Array 3:", array3);
console.log("Array 4:", array4);
console.log("Array 5:", array5);