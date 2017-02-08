export default function isAddressInFavLocalStorage(address) {
  let condi = false;
  let favArr = [];

  if(localStorage.favArr) {
    favArr = JSON.parse(localStorage.favArr);
    
    for(let i=0; i < favArr.length; i++) {
      if(favArr[i].address === address) {
        condi = true;
        break;
      }
      else {
      
      }
    }
  }
  else {
    
  }
  
  return condi;
}
