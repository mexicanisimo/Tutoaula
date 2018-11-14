
     let newpost2={
        username:"",
        email:"",
        password:"",
        rol_id:1
    };

    var Formulario= document.getElementById('Formulario');
    Formulario.addEventListener('submit',function(e){
        e.preventDefault();
        console.log('Me diste click')
        var datos= new FormData(Formulario)
        console.log(Formulario)
        newpost2.username=datos.get('Username')
        newpost2.password=datos.get('Pasword')
        newpost2.email=datos.get('email')
       // newpost2.rol_id=datos.get('rol_id')
       console.log(newpost2)
       fetch('http://18.218.148.201:1337/auth/register',{
        method: 'post',
        body: JSON.stringify(newpost2)
    })
    .then(function(res){
        return res.json()
    })
    .then(function(response){
       console.log(response)
    });
    
/*

        //console.log(datos.get('email'))
        //console.log(datos.get('Pasword'))
       newpost1.username=datos.get('email')
       newpost1.password=datos.get('Pasword')
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
*/

    })