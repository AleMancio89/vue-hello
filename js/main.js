/*
Utilizzando il framework Vue
 - Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
 - Aggiungere un’immagine presa anch’essa da un data.
*/

var app = new Vue({
  el:'#root',
  data: {
    name: 'Google',
    year: 1998,
    founders: ['Larry Page', 'Sergey Brin'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_Google_2013_Official.svg/1024px-Logo_Google_2013_Official.svg.png'
  }
});
