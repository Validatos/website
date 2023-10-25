import { ComponentChildren } from "preact";

const Tooltip = (
  { text, children }: { text: string; children: ComponentChildren },
) => {
  return (
    <div class="relative inline-block group">
      {children}
      <div class="absolute hidden group-hover:inline-block bg-black text-white text-center p-1 rounded-md z-10 w-32 transform -translate-x-1/2">
        {text}
      </div>
    </div>
  );
};

const Brands = () => {
  return (
    <div
      class="ud-hero-brands-wrapper wow fadeInUp flex flex-row justify-center items-center gap-6 pb-6"
      data-wow-delay=".3s"
    >
      <Tooltip text="API desarrollada con Deno">
        <img class="h-14" src="/images/brands/deno.svg" alt="deno" />
      </Tooltip>
      <Tooltip text="Website construido con Fresh">
        <img class="h-10" src="/images/brands/fresh.svg" alt="fresh" />
      </Tooltip>
      <Tooltip text="Estilos con Tailwind">
        <img
          class="h-10"
          src="/images/brands/tailwind.svg"
          alt="tailwind"
        />
      </Tooltip>
      <Tooltip text="Estándar Open API v3">
        <img class="h-16" src="/images/brands/openapi.svg" alt="openapi" />
      </Tooltip>
    </div>
  );
};

export default Brands;
