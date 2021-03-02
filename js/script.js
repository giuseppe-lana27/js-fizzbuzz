// 1. stampo in pagina i numeri da 1 a 100
for ( var i = 1; i < 101; i++){
  // 2. controllo i numeri divisibili per 3 e 5 e sostituisco il loro risultato con la stringa FizzBuzz
  if ((i % 3 == 0) && (i % 5 == 0)){
    console.log("FizzBuzz");
  }
  // 3. controllo i numeri divisibili per 3 e sostituisco il loro risultato con la stringa Fizz
  else if (i % 3 == 0 ) {
    console.log("Fizz");
  }
  // 4. controllo i numeri divisibili per 5 sostituisco il loro risultato con la stringa Buzz
  else if (i % 5 == 0){
    console.log("Buzz");
  }
   // 5. vengono stampati i restanti numeri
  else {
    console.log(i);
  }
}
