var contenido= document.querySelector('#contenido')
var contenido1=document.querySelectorAll('#contenido')
console.log(contenido) 
console.log(contenido1)
console.log(contenido.innerHTML)
function traer(){
    
        contenido.innerHTML=`
        <p>
        <p>sdsad <p>
        <h1>Se ha enviado un mesaje a su correo<h1>
        <h3>Revise su bandeja para recuperar su contraseña <h3>
        <div class="contenedor-contacto100-form-btn">
        <a href="login.html" class="btn btn-default btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">Enviar</span></a>
                            
            
        `

}