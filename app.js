let cuentas = [
    { nombre: "Goku", saldo: 200, password: 'Hola', cuentaNum: 1, active: false},
    { nombre: "Freezer", saldo: 290, password: 'Mundo', cuentaNum: 2, active: false},
    { nombre: "Krilin", saldo: 67, password: 'Cruel', cuentaNum: 3, active: false}
  ];
  var cuentaHabi;
  let principal = document.getElementById("principal");
  let operaciones = document.getElementById("operaciones");
  let ingresarMonto = document.getElementById("ingresarMonto");
  let retirarMonto = document.getElementById("retirarMonto");

  let montoIngresado = document.getElementById("montoIngresado")

  let passwordInput = document.getElementById("passwordInput");

  operaciones.style.display = "none"

  let boton1 = document.getElementById("boton1");
  let boton2 = document.getElementById("boton2");
  let boton3 = document.getElementById("boton3");
  let enviarBoton = document.getElementById("enviarBoton");
  let botonConsultar = document.getElementById("botonConsultar");
  let botonIngresar = document.getElementById("botonIngresar");
  let botonRetirar = document.getElementById("botonRetirar");
  let botonSalir = document.getElementById("botonSalir");
  let botonRegresar = document.getElementById("botonRegresar");
  let botonRegresar2 = document.getElementById("botonRegresar2");

  let usuario = document.getElementById("usuario")
  let saldoC = document.getElementById("saldoC")
  let saldoN = document.getElementById("saldoN")
  let btnOperaciones = document.getElementById("btnOperaciones")
  let mostrarSaldo = document.getElementById("mostrarSaldo")
  let botonRegistrarIngreso = document.getElementById("botonRegistrarIngreso")
  let botonRegistrarRetiro = document.getElementById("botonRegistrarRetiro")
  let inputMonto = document.getElementById("inputMonto");
  let inputMontoRetiro = document.getElementById("inputMontoRetiro");
  let cantidadIngresada = document.getElementById("cantidadIngresada")

  boton1.addEventListener("click", function() {
    boton2.disabled = true;
    boton3.disabled = true;
    cuentas[0].active = true;
    cuentaHabi = validarUsuario();
  });

  boton2.addEventListener("click", function() {
    boton1.disabled = true;
    boton3.disabled = true;
    boton2.active = true;
    cuentas[1].active = true;
    cuentaHabi = validarUsuario();
  });

  boton3.addEventListener("click", function() {
    boton1.disabled = true;
    boton2.disabled = true;
    boton3.active = true;
    cuentas[2].active = true;
    cuentaHabi = validarUsuario();
  });

  enviarBoton.addEventListener("click", function() {
    validarPassword(cuentaHabi);
  });

  botonConsultar.addEventListener("click", function() {
    consultarSaldo(cuentaHabi);
    btnOperaciones.style.display = "none"
    mostrarSaldo.style.display = "block"
  });

  botonIngresar.addEventListener("click", function () {
    btnOperaciones.style.display = "none"
    retirarMonto.style.display = "none"
    ingresarMonto.style.display = "block"
  });

  botonRetirar.addEventListener("click", function () {
    btnOperaciones.style.display = "none"
    retirarMonto.style.display = "block"
    ingresarMonto.style.display = "none"
  });

  botonSalir.addEventListener("click", function () {
    location.reload();
  });

  botonRegistrarIngreso.addEventListener("click", function () {
    let monto = parseFloat(inputMonto.value);
    ingresarDinero(cuentaHabi, monto);
    montoIngresado.style.display = "block"
    ingresarMonto.style.display = "none" 
  });

  botonRegistrarRetiro.addEventListener("click", function () {
    let monto = parseFloat(inputMontoRetiro.value);
    retirarDinero(cuentaHabi, monto);
    console.log("Entro");
    montoIngresado.style.display = "block"
    retirarMonto.style.display = "none" 
  });

  botonRegresar.addEventListener("click", function() {
    regresarMenuPersonal();
  });

  botonRegresar2.addEventListener("click", function() {
    regresarMenuPersonal();
    montoIngresado.style.display = "none"
  });


  function validarUsuario() {
    let cuentaSelect;
    for (let i = 0; i < cuentas.length; i++) {
      if (cuentas[i].active === true) {
        cuentaSelect = cuentas[i].cuentaNum;
      }
    }
    return cuentaSelect;
  }

  function validarPassword(cuentaHabi) {
    
    console.log(passwordInput.value);
    console.log(cuentaHabi);
    console.log(cuentas[cuentaHabi-1].password === passwordInput.value);

    if (cuentas[cuentaHabi -1].password === passwordInput.value) {
      alert("Password correcto");
      principal.style.display = "none"
      operaciones.style.display = "block"
      mostrarSaldo.style.display = "none"
      ingresarMonto.style.display = "none"
      retirarMonto.style.display = "none"
      montoIngresado.style.display = "none"
      usuario.textContent = cuentas[cuentaHabi-1].nombre
    } else {
      alert("Password incorrecto");
      location.reload();
    }
  }

  function consultarSaldo(cuentaHabi){
    console.log(cuentas[cuentaHabi-1].saldo);
    saldoC.textContent = cuentas[cuentaHabi-1].saldo;
  }  

  function regresarMenuPersonal(){
    btnOperaciones.style.display = "block"
    mostrarSaldo.style.display = "none"
  }


  function ingresarDinero(cuentaHabi,monto){
    cuentas[cuentaHabi-1].saldo += monto;
    console.log(cuentas[cuentaHabi-1].saldo);
    saldoN.textContent = cuentas[cuentaHabi-1].saldo;
    cantidadIngresada.textContent = monto;
  }

  function retirarDinero(cuentaHabi,monto){
    cuentas[cuentaHabi-1].saldo -= monto;
    console.log(cuentas[cuentaHabi-1].saldo);
    saldoN.textContent = cuentas[cuentaHabi-1].saldo;
    cantidadIngresada.textContent = monto;
  }
    
  
  
  
  