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
  for (let i = 0; i < datos.length; i++) {
    let tar = document.createElement("div");
    let img = document.createElement("img");
    let card_body = document.createElement("div");
    let titulo = document.createElement("h5");
    let parr = document.createElement("p");
    let lista = document.createElement("ul");
    let item1 = document.createElement("li");

     // //Se asiganan las clases****
    tar.classList.add("card");
    img.classList.add("card-img-top");
    card_body.classList.add("card-body");
    titulo.classList.add("card-title");
    parr.classList.add("card-text");
    lista.classList.add("list-group", "list-group-flush");
    item1.classList.add("list-group-item");

    // //se asignan atributos segun corresponda**
    tar.style.width = "18rem";
    tar.style.height = "25rem";
    tar.style.marginTop = "30px";

    // //Se asignan valores del Json***
    titulo.innerHTML = datos[i].name;
    img.src = datos[i].ThumbnailImage;
    item1.innerHTML = "Tipo de Pokemon: " + datos[i].type;

    // //Se agregan Eventos*********
    var modales = "";
    img.setAttribute("type", "button");

    img.addEventListener("click", () => {
    img.setAttribute("data-bs-toggle", "modal");
    img.setAttribute("data-bs-target", "#md");
      modales = ` <div class="modal fade" id="md" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${datos[i].name}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <ul>
                <li>${datos[i].weight}</li>
                <li>${datos[i].abilities}</li>
                <li>${datos[i].weakness}</li>
                </ul>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>`;
      document.getElementById("contenedor").innerHTML = modales;

      var myModalEl = document.getElementById("md");
      myModalEl.addEventListener("hidden.bs.modal", function (event) {
        // do something...

      });
    });

    //Se agrega al HTML***
    document.body.appendChild(tar);
    tar.appendChild(img);
    tar.appendChild(card_body);
    card_body.appendChild(titulo);
    card_body.appendChild(parr);
    tar.appendChild(lista);
    lista.appendChild(item1);
  }
}
