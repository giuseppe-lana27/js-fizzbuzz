// 1. stampo in pagina i numeri da 1 a 100
for ( var i = 1; i <= 100; i++){
  // 2. controllo i numeri divisibili per 3 e sostituisco il loro risultato con la stringa Fizz
  if (i % 3 == 0 ){
    console.log("Fizz");
  }
  // 3. controllo i numeri divisibili per 5 e sostituisco il loro risultato con la stringa Buzz
  else if (i % 5 == 0){
    console.log("Buzz");
  }
  // 4. controllo i numeri divisibili per 3 e 5 sostituisco il loro risultato con la stringa FizzBuzz
   else if (i % 3 == 0 && i % 5 == 0){
    console.log("FizzBuzz");
  }
   // 5. vengono stampati i numeri restanti
  else {
    console.log(i);
  }
}
