let newpost1={
    username:"",
    password:""
};

var Formulario= document.getElementById('Formulario');
Formulario.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('Me diste click')
    var datos= new FormData(Formulario)
    //console.log(datos.get('email'))
    //console.log(datos.get('Pasword'))
   newpost1.username=datos.get('email')
   newpost1.password=datos.get('Pasword')
   newpost1.email=datos.get('email')
   newpost1.rol_id=datos.get('Pasword')
  // console.log(newpost1)
 //  var objeto= new newpost1(datos.get('email'),datos.get('Pasword'));
   console.log(newpost1)


fetch('http://18.218.148.201:1337/auth/login',{
    method: 'post',
    body: JSON.stringify(newpost1)
})
.then(function(res){
    return res.json()
})
.then(function(response){
   console.log(response)
});
})