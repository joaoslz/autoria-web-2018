
// alert('Bem vindo ao javascript');

/* 

document.getElementById('nome');
document.getElementsByClassName('form-control')
document.getElementsByTagName('h2');
 */

 let nome = document.querySelector('#nome').value;
 let quantidade = document.querySelector('#quantidade').value;
 let valor = document.querySelector('#valor').value;

 // capturar o evento de submeter o formulário
 
 
 document.querySelector('form')
         .addEventListener('submit', function(event ) {

            event.preventDefault();  

             let tr = document.createElement('tr');
             let tdNome =document.createElement('td');  
             let tdQuantidade =document.createElement('td'); 
             let tdValor =document.createElement('td'); 

             tdNome.textContent = nome;
             console.log(tdNome );

         });



 console.log(nome );

 /*
  <tr>
      <td>Lápis 2B</td>
      <td>5</td>
      <td>4.50</td>
      <td>22</td>
  </tr>
           
 */