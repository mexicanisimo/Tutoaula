var contenido= document.querySelector('#contenido')
var contenido1=document.querySelectorAll('#contenido')
console.log(contenido) 
console.log(contenido1)
console.log(contenido.innerHTML)
function traer(){
    
        contenido.innerHTML=`
        <br>
        <br>
        <br>
        <br>

        <center>
        <h1>Felicidades cambiaste tu contraseña<h1>
        <h3>Ingresa para disfrutar nuestro contenido <h3>
        <div class="contenedor-contacto100-form-btn">
        <a href="login.html" class="btn btn-default btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">regresar</span></a>
        </center>                    
            
        `

}