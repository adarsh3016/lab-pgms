function compareArrays(arr1, arr2) {
if(arr1.length != arr2.length) {
return false;
} 
else { 
let result = false;
for(let i=0; i<arr1.length; i++) {

if(arr1[i] != arr2[i]) {
return false;
}
else {
result = true;
}

}
return result;
}

}

const array1 = [0, 1, 3, 5, 7, 9];
const array2 = [0, 1, 3, 5, 7, 9];

const result = compareArrays(array1, array2);
if(result) {
console.log('The arrays are identical');
}
else {
console.log('The arrays are not identical');
}
