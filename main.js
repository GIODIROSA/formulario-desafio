function validar() {
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var correo = document.getElementById("correo");
    var usuario = document.getElementById("usuario");
    var clave = document.getElementById("pass");
    var telefono = document.getElementById("telefono");

    if (
      nombre.value.trim() === "" ||
      apellidos.value.trim() === "" ||
      correo.value === "" ||
      usuario.value === "" ||
      clave.value === "" ||
      telefono.value === ""
    ) {
      alert("Todos los campos son obligatorios");
      return false;
    } else if (nombre.value.length > 30) {
      alert("El nombre es muy largo");
      return false;
    } else if(parseInt(nombre.value)){
    alert("debes ingresar letra y no numeros")
    return false;
    }else if (apellidos.value.length > 80) {
      alert("El apellido es muy largo");
      return false;
    } else if(parseInt(apellidos.value)){
      alert("Debes ingresar letra y no numeros");
      return false;
    }else if (correo.value.length > 100) {
      alert("El correo electrónico es muy largo");
      return false;
    } else if (usuario.value.length > 20) {
      alert("El usuario es muy largo");
      return false;
    } else if (telefono.value.length > 10) {
      alert("El teléfono es muy largo");
      return false;
    } else if (isNaN(telefono.value)) {
      alert("El teléfono debe ser solo números");
      return false;
    } else {
      alert("Todo bien, gracias: " + "" + nombre.value + "" + apellidos.value+ ""+ "y tu usuario es " + usuario.value);
    }
  }



