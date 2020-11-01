
const getCloseset = (val, arr) => {
  const { length: inputArrLength } = arr; 
  if(!inputArrLength) return undefined;
  if(inputArrLength === 1) return arr[0] ;
  const sortedArr = [...arr, val].sort((a, b) =>  (a-b));
  const index = sortedArr.indexOf(val);
  if(!index) return sortedArr[index + 1];
  if(index === sortedArr.length - 1) return  sortedArr[index - 1];
  const prevValue = sortedArr[index - 1];
  const nextValue = sortedArr[index + 1];
  return ((val - prevValue) > (nextValue - val)) 
    ? nextValue : prevValue
};

console.log(getCloseset(0, []));