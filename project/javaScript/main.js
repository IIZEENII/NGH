/* const x = () => document.getElementById('card-container-index');

let padre = x();

console.log(padre);



const seccion2 = document.getElementById('productos');

const a2 = document.getElementById('a2');

let elemento = document.createElement('div');


const cambiaSeccion = (event) => {

    let part2 = `
    <div class="row d-flex">

              <div class="col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                <section class="mx-auto my-5" style="max-width: 23rem;">
                    
                  <div class="card">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                      <img style="border-bottom: 1px solid #000;" src="https://heavenbiotech.cl/wp-content/uploads/703f55857c5592cc1871ab7374f09ee1.jpg" class="img-fluid" />
                      <a href="#!">
                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                      </a>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title font-weight-bold"><a>Rosa Mosqueta</a></h5>
                      <ul class="list-unstyled list-inline mb-0">
                        <li class="list-inline-item me-0">
                          <i class="fas fa-star text-warning fa-xs"> </i>
                        </li>
                        <li class="list-inline-item me-0">
                          <i class="fas fa-star text-warning fa-xs"></i>
                        </li>
                        <li class="list-inline-item me-0">
                          <i class="fas fa-star text-warning fa-xs"></i>
                        </li>
                        <li class="list-inline-item me-0">
                          <i class="fas fa-star text-warning fa-xs"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-star-half-alt text-warning fa-xs"></i>
                        </li>
                        <li class="list-inline-item">
                          <p class="text-muted">4.5 (457)</p>
                        </li>
                      </ul>
                      <p class="mb-2">$300</p>
                      <p class="card-text">
                        Suplemento con vitamina A y B 450 gr
                      </p>
                      <hr class="my-4" />
                      <p class="lead"><strong>Envio estimado</strong></p>
                      <ul class="list-unstyled list-inline d-flex justify-content-between">
                        <li class="list-inline-item me-0">
                          <div class="chip me-0">5:30PM</div>
                        </li>
                        <li class="list-inline-item me-0">
                          <div class="chip bg-secondary text-white me-0">7:30PM</div>
                        </li>
                        <li class="list-inline-item me-0">
                          <div class="chip me-0">8:00PM</div>
                        </li>
                        <li class="list-inline-item me-0">
                          <div class="chip me-0">9:00PM</div>
                        </li>
                      </ul>
                      <a href="../CambiosForm/Formulario-DESKTOP-8AAUAHV.html" class="btn btn-success p-md-1 mb-0">Comprar</a>
                    </div>
                  </div>
                  
                </section>
              </div>
    
              <div class="col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                <section class="mx-auto my-5" style="max-width: 23rem;">
                    
                  <div class="card">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                      <img style="border-bottom: 1px solid #000;" src="https://th.bing.com/th/id/R.d663efee5e79934ca19a52b63fda90dc?rik=7jx4u1IGmpDjOg&pid=ImgRaw&r=0" class="img-fluid" />
                      <a href="#!">
                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                      </a>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title font-weight-bold"><a>BlueCherry BDX</a></h5>
                      <ul class="list-unstyled list-inline mb-0">
                        <li class="list-inline-item me-0">
                          <i class="fas fa-star text-warning fa-xs"> </i>
                        </li>
                        <li class="list-inline-item me-0">
                          <i class="fas fa-star text-warning fa-xs"></i>
                        </li>
                        <li class="list-inline-item me-0">
                          <i class="fas fa-star text-warning fa-xs"></i>
                        </li>
                        <li class="list-inline-item me-0">
                          <i class="fas fa-star text-warning fa-xs"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-star-half-alt text-warning fa-xs"></i>
                        </li>
                        <li class="list-inline-item">
                          <p class="text-muted">4.5 (413)</p>
                        </li>
                      </ul>
                      <p class="mb-2">$250</p>
                      <p class="card-text">
                        Suplemento natural con vitamina B 500 gr
                      </p>
                      <hr class="my-4" />
                      <p class="lead"><strong>Envio estimado</strong></p>
                      <ul class="list-unstyled list-inline d-flex justify-content-between">
                        <li class="list-inline-item me-0">
                          <div class="chip me-0">5:30PM</div>
                        </li>
                        <li class="list-inline-item me-0">
                          <div class="chip bg-secondary text-white me-0">7:30PM</div>
                        </li>
                        <li class="list-inline-item me-0">
                          <div class="chip me-0">8:00PM</div>
                        </li>
                        <li class="list-inline-item me-0">
                          <div class="chip me-0">9:00PM</div>
                        </li>
                      </ul>
                      <a href="../CambiosForm/Formulario-DESKTOP-8AAUAHV.html" class="btn btn-success p-md-1 mb-0">Comprar</a>
                    </div>
                  </div>
                  
                </section>
              </div>
    
              <div class="col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                <section class="mx-auto my-5" style="max-width: 23rem;">
                    
                  <div class="card">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                      <img style="border-bottom: 1px solid #000;" src="https://saludresponde.us/wp-content/uploads/2020/03/Los-Suplementos-Naturales-para-Apoyar-sus-Sesiones-de-Entrenamiento.jpg" class="img-fluid" />
                      <a href="#!">
                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                      </a>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title font-weight-bold"><a>NF Natural Amino/a></h5>
                      <ul class="list-unstyled list-inline mb-0">
                        <li class="list-inline-item me-0">
                          <i class="fas fa-star text-warning fa-xs"> </i>
                        </li>
                        <li class="list-inline-item me-0">
                          <i class="fas fa-star text-warning fa-xs"></i>
                        </li>
                        <li class="list-inline-item me-0">
                          <i class="fas fa-star text-warning fa-xs"></i>
                        </li>
                        <li class="list-inline-item me-0">
                          <i class="fas fa-star text-warning fa-xs"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-star-half-alt text-warning fa-xs"></i>
                        </li>
                        <li class="list-inline-item">
                          <p class="text-muted">4.5 (773)</p>
                        </li>
                      </ul>
                      <p class="mb-2">$370</p>
                      <p class="card-text">
                        Aminoácido y vitamina C 700 gr
                      </p>
                      <hr class="my-4" />
                      <p class="lead"><strong>Envio estimado</strong></p>
                      <ul class="list-unstyled list-inline d-flex justify-content-between">
                        <li class="list-inline-item me-0">
                          <div class="chip me-0">5:30PM</div>
                        </li>
                        <li class="list-inline-item me-0">
                          <div class="chip bg-secondary text-white me-0">7:30PM</div>
                        </li>
                        <li class="list-inline-item me-0">
                          <div class="chip me-0">8:00PM</div>
                        </li>
                        <li class="list-inline-item me-0">
                          <div class="chip me-0">9:00PM</div>
                        </li>
                      </ul>
                      <a href="../CambiosForm/Formulario-DESKTOP-8AAUAHV.html" class="btn btn-success p-md-1 mb-0">Comprar</a>
                    </div>
                  </div>
                  
                </section>
              </div>
    
              <div class="col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                <section class="mx-auto my-5" style="max-width: 23rem;">
                    
                  <div class="card">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                      <img style="border-bottom: 1px solid #000;" src="https://th.bing.com/th/id/R.697ee8c62aa5a52a14597ad35705ef0c?rik=TfpH0oSJpa1xGg&pid=ImgRaw&r=0" class="img-fluid" />
                      <a href="#!">
                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                      </a>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title font-weight-bold"><a>Sana Complejo B</a></h5>
                      <ul class="list-unstyled list-inline mb-0">
                        <li class="list-inline-item me-0">
                          <i class="fas fa-star text-warning fa-xs"> </i>
                        </li>
                        <li class="list-inline-item me-0">
                          <i class="fas fa-star text-warning fa-xs"></i>
                        </li>
                        <li class="list-inline-item me-0">
                          <i class="fas fa-star text-warning fa-xs"></i>
                        </li>
                        <li class="list-inline-item me-0">
                          <i class="fas fa-star text-warning fa-xs"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fas fa-star-half-alt text-warning fa-xs"></i>
                        </li>
                        <li class="list-inline-item">
                          <p class="text-muted">4.5 (568)</p>
                        </li>
                      </ul>
                      <p class="mb-2">$345</p>
                      <p class="card-text">
                        Suplemento con vitamina B 600 gr
                      </p>
                      <hr class="my-4" />
                      <p class="lead"><strong>Envio estimado</strong></p>
                      <ul class="list-unstyled list-inline d-flex justify-content-between">
                        <li class="list-inline-item me-0">
                          <div class="chip me-0">5:30PM</div>
                        </li>
                        <li class="list-inline-item me-0">
                          <div class="chip bg-secondary text-white me-0">7:30PM</div>
                        </li>
                        <li class="list-inline-item me-0">
                          <div class="chip me-0">8:00PM</div>
                        </li>
                        <li class="list-inline-item me-0">
                          <div class="chip me-0">9:00PM</div>
                        </li>
                      </ul>
                      <a href="../CambiosForm/Formulario-DESKTOP-8AAUAHV.html" class="btn btn-success p-md-1 mb-0">Comprar</a>
                    </div>
                  </div>
                  
                </section>
              </div>
  
            </div>
    `

    elemento.innerHTML = part2;

    padre.replaceChild(part2, seccion2);

}

a2.addEventListener("onclick" , cambiaSeccion); */