export default function isAddressInFav(arr, address) {
  let index = -1;

  for(var i = 0; i < arr.length; i++){
    if(arr[i].address == address) {
      index = i;
      break;
    }
    else {
    
    }
  }

  return index; 
}
