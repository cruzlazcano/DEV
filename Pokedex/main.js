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

    img.setAttribute("data-bs-toggle", "modal");
    img.setAttribute("type", "button");
    img.setAttribute("data-bs-target", "#exampleModal");
  
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


    img.addEventListener("click", () => {


             modales =  ` <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${datos[i].name}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>`
        
        document.getElementById("contenedor").innerHTML = modales;

        // var mod = document.createElement("div");
        // var modal_dialog = document.createElement("div");
        // var modal_content = document.createElement("div");
        // var modal_header = document.createElement("div");
        // var h1 = document.createElement("h1");
        // var boton = document.createElement("button");
        // var modal_body = document.createElement("div");
        // var ul = document.createElement("ul");
        // var peso = document.createElement("li");
        // var habilidades = document.createElement("li");
        // var debilidades = document.createElement("li");
    
        // mod.classList.add("modal", "fade");
        // modal_dialog.classList.add("modal-dialog");
        // modal_content.classList.add("modal-content");
        // modal_header.classList.add("modal-header");
        // h1.classList.add("modal-title", "fs-5");
        // boton.classList.add("btn-close");
        // modal_body.classList.add("modal-body");
        // ul.classList.add("list-group");
        // peso.classList.add("list-group-item");
        // habilidades.classList.add("list-group-item");
        // debilidades.classList.add("list-group-item");
    
        // mod.setAttribute("id", "exampleModal");
        // h1.setAttribute("id", "exampleModalLabel");
        // boton.setAttribute("data-bs-dismiss", "modal");
        
        // h1.innerHTML = "el nombre es: " +datos[i].name;
        // peso.innerHTML = "El pesos es: " +datos[i].weight;
        // habilidades.innerHTML = "Sus habilidades son: " + datos[i].abilities;
        // debilidades.innerHTML = "Sus debilidades son: " + datos[i].weakness;


        // document.body.appendChild(mod);
        // mod.appendChild(modal_dialog);
        // modal_dialog.appendChild(modal_content);
        // modal_content.appendChild(modal_header);
        // modal_header.appendChild(h1);
        // modal_header.appendChild(boton);
        // modal_content.appendChild(ul);
        // ul.appendChild(peso);
        // ul.appendChild(habilidades);
        // ul.appendChild(debilidades);
 
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
