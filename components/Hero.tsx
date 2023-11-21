import Brands from "#/components/Brands.tsx";

const Hero = () => {
  return (
    <section class="ud-hero" id="home">
      <div class="max-w-6xl container mx-auto ">
        <div class="row">
          <div class="col-lg-12">
            <div class="ud-hero-content wow fadeInUp" data-wow-delay=".2s">
              <h1 class="ud-hero-title">
                Validación de datos rápida y confiable.
              </h1>
              <p class="ud-hero-desc">
                Validatos es la solucion para verificación de identidad (KYC)
                mas optimizada y con un enfoque en alta disponibilidad y
                facilidad de integración. Una suscripción te dara acceso a una
                gran lista de APIs para validación de datos de identidad mas
                cómunes en lationamérica, por ejemplo INE en México,
                Registraduria de Colombia o Renaper en Argentina.
              </p>
              <ul class="ud-hero-buttons">
                <li>
                  <a
                    href="/validaciones"
                    rel="nofollow noopener"
                    target="_blank"
                    class="ud-main-btn ud-white-btn"
                  >
                    Explora nuestras APIs
                  </a>
                </li>
                <li>
                  <a
                    href="/docs"
                    rel="nofollow noopener"
                    class="bg-white/20 text-white m-2 py-4 px-3 rounded-md"
                  >
                    Documentación OpenAPI
                  </a>
                </li>
              </ul>
            </div>

            <Brands />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
