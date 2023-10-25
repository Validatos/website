import IconBrandGithub from "$tabler_icons/tsx/brand-github.tsx";
import IconGift from "$tabler_icons/tsx/gift.tsx";
import IconDollar from "$tabler_icons/tsx/mood-dollar.tsx";
import IconSourceCode from "$tabler_icons/tsx/source-code.tsx";
import IconLayersSubtract from "$tabler_icons/tsx/layers-subtract.tsx";

<IconBrandGithub class="w-6 h-6" />;

interface AboutCardProps {
  title: string;
  description: string;
  Icon: any;
  linkText?: string;
  linkHref?: string;
}

const AboutCard = ({
  title,
  description,
  Icon,
  linkText,
  linkHref,
}: AboutCardProps) => {
  return (
    <div class="w-full sm:w-1/2 lg:w-1/4">
      <div class="ud-single-feature wow fadeInUp" data-wow-delay=".25s">
        <div class="ud-feature-icon">
          <Icon class="w-8 h-8" />
        </div>
        <div class="ud-feature-content">
          <h3 class="ud-feature-title">{title}</h3>
          <p class="ud-feature-desc w-4/5">{description}</p>
          {linkText && linkHref && (
            <a href={linkHref} class="ud-feature-link">
              {linkText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const aboutData = [
    {
      title: "Precios competitivos",
      description:
        `Precios competitivos y planes flexibles para tus necesidades.`,
      Icon: IconDollar,

      linkText: "Ver precios",
      linkHref: "/#pricing",
    },
    {
      title: "Calidad asegurada",
      description:
        `Servicios optimizados y uso de edge functions con alta disponibilidad y respuestas rápidas globalmente.`,
      Icon: IconSourceCode,
    },
    {
      title: "Integración Sencilla",
      description:
        `Nuestros servicios están diseñados para una integración sencilla con el estándar OpenAPI.`,
      Icon: IconLayersSubtract,
    },
    {
      title: "Comienza Gratis",
      description:
        `Regístrate gratis y obtén un apiKey para probar nuestros servicios sin coste inicial.`,
      Icon: IconGift,
      linkText: "Ir al dashboard",
      linkHref: "/account",
    },
  ];
  return (
    <section id="about" class="ud-features">
      <div class="container mx-auto max-w-6xl">
        <div class="ud-section-title">
          <span>Validatos</span>
          <h2>Acerca de</h2>
          <p>
            El objetivo de Validatos es ser el mejor proveedor de servicios de
            validacion de identidad (KYC) con un enfoque en latinoamerica.
          </p>
        </div>
        <div class="flex flex-wrap flex-row flex-auto">
          {aboutData.map((a) => {
            return <AboutCard {...a} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
