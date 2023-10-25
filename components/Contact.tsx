import IconMailbox from "@tabler_icons/tsx/mailbox.tsx";
import Icon24Hours from "@tabler_icons/tsx/24-hours.tsx";

const Contact = () => {
  return (
    <section id="contact" class="ud-contact">
      <div class="container mx-auto max-w-6xl">
        <div class="row align-items-center">
          <div class="col-xl-8 col-lg-7">
            <div class="ud-contact-content-wrapper">
              <div class="ud-contact-title">
                <span>Contacto</span>
                <h2>
                  Hablemos! <br />
                </h2>
              </div>
              <div class="ud-contact-info-wrapper">
                <div class="ud-single-info">
                  <div class="ud-info-icon">
                    <Icon24Hours class="w-8 h-8" />
                  </div>
                  <div class="ud-info-meta">
                    <span class="font-bold text-[#212b36] text-lg">
                      Dudas o inquietudes?
                    </span>
                    <p>
                      Podemos ayudarte a resolver tus dudas mediante nuestro
                      email.
                    </p>
                  </div>
                </div>
                <div class="ud-single-info">
                  <div class="ud-info-icon">
                    <IconMailbox class="w-8 h-8" />
                  </div>
                  <div class="ud-info-meta">
                    <span class="font-bold text-[#212b36] text-lg">
                      Manda un correo a
                    </span>
                    <a
                      href="mailto:contacto@validatos.io?subject=Duda%20Validatos"
                      target="_blank"
                    >
                      contacto@validatos.io
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-5">
            <div
              class="ud-contact-form-wrapper wow fadeInUp"
              data-wow-delay=".2s"
            >
              <h3 class="ud-contact-form-title">Deja un mensaje</h3>
              <form
                class="ud-contact-form"
                method="POST"
                action="/api/contact"
              >
                <div class="ud-form-group">
                  <label for="fullName">Nombre*</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Juan Hernandez"
                  />
                </div>
                <div class="ud-form-group">
                  <label for="email">Correo*</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="ejemplo@correo.com"
                  />
                </div>
                <div class="ud-form-group">
                  <label for="phone">Telefono*</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+52 5554 5211 552"
                  />
                </div>
                <div class="ud-form-group">
                  <label for="message">Mensaje*</label>
                  <textarea
                    name="message"
                    rows={2}
                    placeholder="Necesito ayuda con ..."
                  >
                  </textarea>
                </div>
                <div class="ud-form-group mb-0">
                  <button type="submit" class="ud-main-btn">
                    Enviar mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
