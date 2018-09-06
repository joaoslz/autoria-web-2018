
// alert('Bem vindo ao javascript');

/* 

document.getElementById('nome');
document.getElementsByClassName('form-control')
document.getElementsByTagName('h2');
 */

 let tBody = document.querySelector('#tbodyItemPedido');

document.querySelector('form').addEventListener('submit', function (event) {

    event.preventDefault();


    let nome = document.querySelector('#nome').value;
    let quantidade = document.querySelector('#quantidade').value;
    let valor = document.querySelector('#valor').value;
    // capturar o evento de submeter o formulário


    let tr = document.createElement('tr');

    let tdNome = document.createElement('td');
    let tdQuantidade = document.createElement('td');
    let tdValor = document.createElement('td');

    tdNome.textContent = nome;
    tdQuantidade.textContent = quantidade;
    tdValor.textContent = valor;


    let subTotal = valor * quantidade;
    let tdSubTotal = document.createElement('td');
    tdSubTotal.textContent = subTotal;

    tr.appendChild(tdNome);
    tr.appendChild(tdQuantidade);
    tr.appendChild(tdValor);
    tr.appendChild(tdSubTotal);

    tBody.appendChild(tr );

  /*  
    console.log(tr);

    console.log(' --------------------------------- ');

    ths = document.querySelectorAll('th' );
    console.log(ths );

    for(let i = 0; i < ths.length; i++) {
        console.log(ths[i].textContent );
    }

    console.log(' --------------------------------- ');

    ths.forEach( function(th) {
        console.log(th.textContent );
    }  );


    console.log(' --------------------------------- ');

    ths.forEach( th => console.log(th.textContent )  );
 */

});




 /*
  <tr>
      <td>Lápis 2B</td>
      <td>5</td>
      <td>4.50</td>
      <td>22</td>
  </tr>
           
 */