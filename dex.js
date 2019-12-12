const $actionContainer=document.querySelector('#action');
let HTMLString='';
for(let i=0;i<=148;i++){
    data2="https://pokeapi.co/api/v2/pokemon/"+i+"/"
$.ajax(data2, {
    method:'GET',
    success:function(data){

        HTMLString=mostrar(data.forms[0].name,data.sprites.front_default,data.weight,data.types[0].type.name,i)
        const html=document.implementation.createHTMLDocument();
         html.body.innerHTML=HTMLString;
 //

         $actionContainer.append(html.body.children[0]);
    },
    error:function(error){console.log(error);}
})
}
document.querySelector('#index').remove()
function mostrar(nombre,pokemon,peso,typo,contador){
    return(`

    <div class="cuadrodex">

    <div class="box">
      <center>
      <img src="${pokemon}" width="150" height="150">
      </center>
      <div class="descripcion">
      <h2>Numero: ${contador}</h2>
      <p>Nombre: ${nombre}
      <br>Peso: ${peso}
      <br>Tipo: ${typo}
      </p>
      </div>
    </div>
    </div>

    `)}
