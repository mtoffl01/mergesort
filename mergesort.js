function split(wholeArray) {
  if (wholeArray.length===0) {
    return wholeArray
  }
  let midpoint = Math.floor(wholeArray.length/2)
  let firstHalf = wholeArray.slice(0, midpoint)
  let secondHalf = wholeArray.slice(midpoint)
  return [firstHalf, secondHalf];
}

function merge(first, second){
  let firstPtr = 0;
  let secondPtr = 0;
  let result = [];
  while(firstPtr < first.length && secondPtr < second.length){
    if (first[firstPtr] < second[secondPtr]){
      result.push(first[firstPtr]);
      firstPtr++;
    }
    else{
      result.push(second[secondPtr]);
      secondPtr++;
    }
  }

  if(firstPtr === first.length){
    for(let i=secondPtr; i<second.length; i++){
      result.push(second[i]);
    }
  }
  else{
    for(let i=firstPtr; i<first.length; i++){
      result.push(first[i]);
    }
  }
  return result;

}
