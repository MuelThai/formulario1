document.getElementById("registroForm").addEventListener("submit", function(event){
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
  
    // Validación simple para verificar que los campos no estén vacíos
    if(nombre === "" || correo === "" || contrasena === "") {
      alert("Por favor completa todos los campos.");
      event.preventDefault(); // Evita que se envíe el formulario
    }
  });
  