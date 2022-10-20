var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    tarjetas(myObj);
   }
};
xmlhttp.open("GET", "datos.json", true);
xmlhttp.send();


function tarjetas (datos){
    for (let i = 0; i < datos.length; i++) {

        let tar = document.createElement('div');
        let img = document.createElement('img');
        let card_body = document.createElement('div');
        let titulo=document.createElement('h5');
        let parr = document.createElement('p');
        let lista = document.createElement('ul');
        let item1 = document.createElement('li');


    //Se asiganan las clases****
        tar.classList.add('card');
        img.classList.add('card-img-top');
        card_body.classList.add('card-body');
        titulo.classList.add('card-title');
        parr.classList.add('card-text');
        lista.classList.add('list-group','list-group-flush');
        item1.classList.add('list-group-item');
        
    //se asignan atributos segun corresponda**
        tar.style.width = '18rem';
        tar.style.height = '25rem';
        tar.style.marginTop = '30px'
        

    //Se asignan valores del Json***    
        titulo.innerHTML= datos[i].name;
        img.src = datos[i].ThumbnailImage;
        item1.innerHTML = "Tipo de Pokemon: "+datos[i].type;

    //Se agregan Eventos*********
        img.setAttribute("data-bs-toggle","modal");
        img.setAttribute("data-bs-target","#exampleModal");
        let moreinfo = document.getElementById('lista');
        let btn_cerrar = document.getElementById('cerrar');

        img.addEventListener('click', () =>{

            let peso = document.createElement('li');
            let habilidades = document.createElement('li');
            let debilidades = document.createElement('li');

            peso.innerHTML="Su peso es de: " + datos[i].weight;
            habilidades.innerHTML="Sus habilidades son: " + datos[i].abilities;
            debilidades.innerHTML="Su debilidades son: " + datos[i].weakness;

            moreinfo.appendChild(peso);
            moreinfo.appendChild(habilidades);
            moreinfo.appendChild(debilidades);

            if (btn_cerrar.setAttribute("click", true)) {
                peso.remove();
                habilidades.remove();
                debilidades.remove();
            
                
            }                       
           
        })
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