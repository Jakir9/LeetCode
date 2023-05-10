function smartSum(){ //arguments
  let total= 0;
  
  for(let i=0;i<arguments.length;i++) {
    if (Array.isArray(arguments[i])) {
      total += smartSum(...arguments[i])
    }
    else {
     total += arguments[i]
    }
  }
  
  return total

}