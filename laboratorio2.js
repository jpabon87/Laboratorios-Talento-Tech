
const aplicacion = document.querySelector('.container')
const aplicacion2 = document.querySelector('.container2')
const aplicacion3 = document.querySelector('.container3')
const aplicacion4 = document.querySelector('.container4')
const aplicacion5 = document.querySelector('.container5')
const aplicacionr = document.querySelector('.containerr')
const url = 'https://jsonplaceholder.typicode.com/posts/1/comments'


//function ID1
function ID1(){
   fetch(url)
   .then(res => res.json())
   .then(data => {
      const name = document.createElement('p');
      name.innerHTML = data[0].name; 
      aplicacion.appendChild(name);
      const email = document.createElement('p');
      email.innerHTML = data[0].email; 
      aplicacion.appendChild(email);
      const body = document.createElement('p');
      body.innerHTML = data[0].body; 
      aplicacion.appendChild(body);
   })
   .catch(err => console.log(err))
}

//boton
const boton1 = document.createElement('button');
boton1.textContent = 'ID1';
boton1.addEventListener('click',ID1)
aplicacion.appendChild(boton1);

//function ID2
function ID2(){
   fetch(url)
   .then(res => res.json())
   .then(data => {
      const name = document.createElement('p');
      name.innerHTML = data[1].name; 
      aplicacion2.appendChild(name);
      const email = document.createElement('p');
      email.innerHTML = data[1].email; 
      aplicacion2.appendChild(email);
      const body = document.createElement('p');
      body.innerHTML = data[1].body; 
      aplicacion2.appendChild(body);
   })
   .catch(err => console.log(err))
}

//boton
const boton2 = document.createElement('button');
boton2.textContent = 'ID2';
boton2.addEventListener('click',ID2)
aplicacion2.appendChild(boton2);


//function ID3
function ID3(){
   fetch(url)
   .then(res => res.json())
   .then(data => {
      const name = document.createElement('p');
      name.innerHTML = data[2].name; 
      aplicacion3.appendChild(name);
      const email = document.createElement('p');
      email.innerHTML = data[2].email; 
      aplicacion3.appendChild(email);
      const body = document.createElement('p');
      body.innerHTML = data[2].body; 
      aplicacion3.appendChild(body);
   })
   .catch(err => console.log(err))
}

//boton
const boton3 = document.createElement('button');
boton3.textContent = 'ID3';
boton3.addEventListener('click',ID3)
aplicacion3.appendChild(boton3);

//function ID4
function ID4(){
   fetch(url)
   .then(res => res.json())
   .then(data => {
      const name = document.createElement('p');
      name.innerHTML = data[3].name; 
      aplicacion4.appendChild(name);
      const email = document.createElement('p');
      email.innerHTML = data[3].email; 
      aplicacion4.appendChild(email);
      const body = document.createElement('p');
      body.innerHTML = data[3].body; 
      aplicacion4.appendChild(body);
   })
   .catch(err => console.log(err))
}

//boton
const boton4 = document.createElement('button');
boton4.textContent = 'ID4';
boton4.addEventListener('click',ID4)
aplicacion4.appendChild(boton4);

//function ID5
function ID5(){
   fetch(url)
   .then(res => res.json())
   .then(data => {
      const name = document.createElement('p');
      name.innerHTML = data[4].name; 
      aplicacion5.appendChild(name);
      const email = document.createElement('p');
      email.innerHTML = data[4].email; 
      aplicacion5.appendChild(email);
      const body = document.createElement('p');
      body.innerHTML = data[4].body; 
      aplicacion5.appendChild(body);
   })
   .catch(err => console.log(err))
}

//boton
const boton5 = document.createElement('button');
boton5.textContent = 'ID5';
boton5.addEventListener('click',ID5)
aplicacion5.appendChild(boton5);


const botonRecargar = document.createElement('button');
botonRecargar.textContent = 'Borrar datos';
botonRecargar.addEventListener('click',function(){
   location.reload();
});
aplicacionr.appendChild(botonRecargar);