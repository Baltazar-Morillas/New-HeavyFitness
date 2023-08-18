import React from "react";

const Home = () => {
  return (
    <div>
      <div class="textoInicio">
        <h2>Te damos la bienvenida</h2>
        <p>Explora nuestras secciones con una gran variedad de productos.</p>
        <p>HeavyFitness busca lo mejor para vos.</p>
      </div>
      <br />
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="false"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner bannerAltura">
          <div class=" carousel-item active">
            <img
              src="https://res.cloudinary.com/dbguo4alu/image/upload/v1664234992/HeavyFitness/banner-zapatillas_oajkuk.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="titulosBanner">Ropa deportiva</h5>
              <p class="parrafosBanner">Variedad para hombres y mujeres</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://res.cloudinary.com/dbguo4alu/image/upload/v1664234999/HeavyFitness/accesorios-banner_ksfosh.png"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="titulosBanner">Accesorios</h5>
              <p class="parrafosBanner">
                El mejor equipo para tus entrenamientos
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://res.cloudinary.com/dbguo4alu/image/upload/v1664234663/HeavyFitness/BannerSuplementos_xt7zrj.jpg"
              class="d-block w-100"
              alt="Banner de suplementos"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="titulosBanner">Suplementos</h5>
              <p class="parrafosBanner">
                Articulos de primera marca para mejorar tu rendimiento
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
