interface PricingCardProps {
  name: string;
  price: number;
  calls: number;
  classes?: string;
  popular?: boolean;
}
const PricingCard = (props: PricingCardProps) => {
  const formattedPrice = props.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div class="w-full md:w-1/3">
      <div
        class={`ud-single-pricing  wow fadeInUp ${props.classes}`}
        data-wow-delay=".15s"
      >
        {props.popular && <span class="ud-popular-tag">POPULAR</span>}
        <div class="ud-pricing-header">
          <h3>{props.name}</h3>
          <h4>${formattedPrice} / mes</h4>
        </div>
        <div class="ud-pricing-body">
          <u class="no-underline">
            <li class="text-mygray border-none">
              Incluye un total de <strong>{props.calls}</strong> api requests
            </li>
            <li class="text-mygray">
              Costo por request de ${(props.price / props.calls).toFixed(2)} mxn
            </li>
            <li class="text-mygray">Puedes cancelar en cualquier momento</li>
          </u>
        </div>
        <div class="ud-pricing-footer">
          <a href="/account/manage" class="ud-main-btn ud-border-btn">
            Suscribirse
          </a>
        </div>
      </div>
    </div>
  );
};

const pricing_plans = [
  { name: "Desarrollador", price: 150, classes: "first-item", calls: 500 },
  {
    name: "Startup",
    price: 1000,
    classes: "active",
    calls: 4000,
  },
  { name: "Business", price: 10000, classes: "last-item", calls: 50000 },
];

const Pricing = () => {
  return (
    <section id="pricing" class="ud-pricing">
      <div class="container mx-auto max-w-6xl">
        <div class="ud-section-title mx-auto text-center">
          <span>Precios</span>
          <h2>Suscripciones</h2>
          <p>
            Ofrecemos suscripciones a la medida administradas mediante stripe
            para mayor facilidad y tranquilidad. Validatos no almacena tu
            informacion de pago.
          </p>
        </div>

        <div class="flex flex-col md:flex-row flex-wrap justify-center items-center">
          {pricing_plans.map((pp) => <PricingCard {...pp} />)}
        </div>
        <div class="ud-section-title mx-auto text-center">
          <span>Alternativas</span>
          <h2>RapidApi</h2>
          <p>
            Si lo prefieres, ofrecemos nuestra API en la plataforma de RapidApi
            aunque a un costo mayor.
          </p>
          <a class="text-xl text-blue-900 mt-4 font-bold" href="/rapidapi">
            Ver los planes en RapidApi
          </a>
        </div>
        <div class="ud-section-title mx-auto text-center">
          <h2>Enterprise</h2>
          <p>
            Si tus necesidades exceden los límites del plan Business, por favor
            envía un correo a{" "}
            <strong>contacto@validatos.io</strong>. Podemos diseñar un plan
            personalizado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
