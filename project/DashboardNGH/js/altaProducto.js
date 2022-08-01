const form = document.getElementById('form1');

const AltaProducto = (event) => {

    event.preventDefault();
    
    const {productoNuevo, marca, precio, descripcion, codigo, imagen } = event.target;

    console.log(productoNuevo.value, marca.value);

    if (productoNuevo.value.length == 0 || marca.value.length == 0 || precio.value.length == 0 || descripcion.value.length == 0 || codigo.value.length == 0 || imagen.value == 0) {
        alert("No se han completado todos los campos");
    } else {
        const padre = document.getElementById('padre');

        padre.setAttribute('class', 'row')

        const padre2 = document.getElementById('tablaPadre');

        const producto = document.createElement('div');

        const tabla = document.createElement('tr');

        
        producto.innerHTML = `
        <div col-md-12 col-lg-6 col-xl-3 pb-5" id="${codigo.value}">
        <div class="card" style="border-radius: 15px;">
          <div class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src="${imagen.value}"
              style="border-top-left-radius: 15px; border-top-right-radius: 15px;" class="img-fluid"
              alt="Laptop" />
            <a href="#!">
              <div class="mask"></div>
            </a>
          </div>
          <div class="card-body pb-0">
            <div class="d-flex justify-content-between">
              <div>
                <p><a style="text-decoration: none;" href="#!" class="text-dark">${productoNuevo.value}</a></p>
                <p class="small text-muted">${marca.value}</p>
              </div>
              <div>
                <div class="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p class="small text-muted">Rated 4.0/5</p>
              </div>
            </div>
          </div>
          <hr class="my-0" />
          <div class="card-body pb-0">
            <div class="d-flex justify-content-between">
              <p><a href="#!" class="text-dark" style="text-decoration: none;">${precio.value} mx</a></p>
              <p class="text-dark">${codigo.value}</p>
            </div>
            <p class="small text-muted">${descripcion.value}
          <hr class="my-0" />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
              <a href="#!" class="text-dark fw-bold" style="text-decoration: none;">Cancel</a>
              <button type="button" class="btn btn-primary">Buy now</button>
            </div>
          </div>
        </div>
        </div>
        `

        tabla.innerHTML = `
            <td>${productoNuevo.value}</td>
            <td>${marca.value}</td>
            <td>${precio.value} mx</td>
            <td>${descripcion.value}</td>
            <td>${codigo.value}</td>

        `

        padre.appendChild(producto);
        
        padre2.appendChild(tabla);
    }   
}


form.addEventListener("submit", AltaProducto);


//baja de los productos

const form2 = document.getElementById('form1');

const BajaProducto = (event) => {

    const {codigo2 } = event.target;

    if (codigo2.value == 0) {
        alert("no se completó el campo")
    } else {

        let remover = document.getElementById(codigo2.value);

        remover.removeChild(remover.lastChild);
    }
}



form2.addEventListener("submit", BajaProducto)