export default function favAddressInLocalStorage() {
  let favArr = [];

  if(localStorage.favArr) {
    favArr = JSON.parse(localStorage.favArr);
  }
  else {
    favArr = [];
  }
  
  return favArr;
}
