
// alert('Bem vindo ao javascript');

/* 

document.getElementById('nome');
document.getElementsByClassName('form-control')
document.getElementsByTagName('h2');
 */

 let tBody = document.querySelector('#tbodyItemPedido');

//document.querySelector('form').addEventListener('submit', function (event) {
document.querySelector('#btnCadastro').addEventListener('click', function (event) {


    event.preventDefault();
     
    let campos = obterDadosDoFormulario();

    let tr = document.createElement('tr');
    campos.forEach(campo => {
                        let td =  document.createElement('td');
                        td.textContent = campo;
                        tr.appendChild(td );
                  });
  
    let tdSubTotal = criaCelulaDoSubTotal(campos );
  
     tr.appendChild(tdSubTotal );

    tBody.appendChild(tr );

  });


  function obterDadosDoFormulario() {
      return [ document.querySelector('#nome').value,
               document.querySelector('#quantidade').value,
               document.querySelector('#valor').value ];
  }

  function criaCelulaDoSubTotal(campos ) {
    document.createElement('td');
    let subTotal = campos[1] * campos[2];
    let tdSubTotal = document.createElement('td');
    tdSubTotal.textContent = subTotal;
    
    return tdSubTotal;
  }

