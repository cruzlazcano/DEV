var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    tarjetas(myObj);
  }
};
xmlhttp.open("GET", "datos.json", true);
xmlhttp.send();

function tarjetas(datos) {
  var pokemones="";
  for (let i = 0; i < datos.length; i++) {
        pokemones += `<div class="card" style="width: 18rem;">
    <img data-bs-toggle="modal" data-bs-target="#exampleModal${i}" src="${datos[i].ThumbnailImage}" class="card-img-top" alt="...">
        <ul class="list-group">
            <li class="list-group-item">Su peso es: ${datos[i].name}</li>
        </ul>
    <div class="card-body">
          <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${datos[i].name}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <ul class="list-group">
                <li class="list-group-item">Su peso es: ${datos[i].weight}</li>
                <li class="list-group-item">Sus habilidades son: ${datos[i].abilities}</li>
                <li class="list-group-item">Sus debilidades son: ${datos[i].weakness}</li>
                <li class="list-group-item">El tipo de pokemon es: ${datos[i].type}</li>

                </ul>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      </div>
        </div>`;
        }
    document.getElementById("contenedor").innerHTML = pokemones;

  let btn_buscar = document.getElementById("btn_buscar");
  let buscar="";

  btn_buscar.addEventListener('click', (e) => {
    let busqueda = document.getElementById("busqueda").value;
    buscar = datos.filter(dat =>dat.name == busqueda);
    var poke ="";
        for (let i = 0; i < buscar.length; i++) {
            console.log(buscar[i])
            poke += `<div class="card" style="width: 18rem;">
<img data-bs-toggle="modal" data-bs-target="#exampleModal${i}" src="${buscar[i].ThumbnailImage}" class="card-img-top" alt="...">
    <ul class="list-group">
        <li class="list-group-item">Su peso es: ${buscar[i].name}</li>
    </ul>
<div class="card-body">
      <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${buscar[i].name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <ul class="list-group">
            <li class="list-group-item">Su peso es: ${buscar[i].weight}</li>
            <li class="list-group-item">Sus habilidades son: ${buscar[i].abilities}</li>
            <li class="list-group-item">Sus debilidades son: ${buscar[i].weakness}</li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

  </div>
                    </div>`;
        }
        e.preventDefault();
        if(!poke==""){
          document.getElementById("contenedor").innerHTML=poke;

        }else{
          document.getElementById("contenedor").innerHTML = pokemones;
        }
 })
}