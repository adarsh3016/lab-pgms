function chunkArray(myArray, chunk_size){
var index = 0;
var arrayLength = myArray.length;
var tempArray = [];
for (index = 0; index < arrayLength; index += chunk_size) {
myChunk = myArray.slice(index, index+chunk_size);
tempArray.push(myChunk);
}

return tempArray;
}

var result = chunkArray([9,8,7,6,5,4,3,2,1], 3);
console.log(result);
 