import Logo from "./Logo.tsx";

function Footer() {
  const footerNavItems = [
    {
      inner: "Docs",
      href: "/docs",
    },
    {
      inner: "Terminos y Condiciones",
      href: "/terminos-y-condiciones",
    },
    {
      href: "/#contact",
      inner: "Contacto",
    },
  ];
  return (
    <footer
      class={`flex flex-col md:flex-row justify-between px-4 py-4 items-center bg-blue-600 text-white`}
    >
      <Logo />

      <div class="flex flex-col md:flex-row items-center justify-center">
        <nav class="flex flex-wrap justify-center gap-x-8 gap-y-4 items-center">
          {footerNavItems.map((i) => (
            <a href={i.href} class="text-white">
              {i.inner}
            </a>
          ))}
        </nav>
        <a
          href="https://fresh.deno.dev"
          target="_blank"
          class="md:ml-4 mt-6 md:mt-0"
        >
          <img
            width="197"
            height="37"
            src="https://fresh.deno.dev/fresh-badge.svg"
            alt="Made with Fresh"
          />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
