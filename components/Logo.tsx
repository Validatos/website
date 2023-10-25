export default function Logo({ darkTheme = true }) {
  return (
    <a class="my-navbar flex flex-row items-center py-4" href="/#">
      <img
        class="h-12 mr-4 md:h-16"
        src={darkTheme ? "images/logo/logo.svg" : "images/logo/logo2.webp"}
        alt="Logo"
      />
      <h1 class={` text-lg md:text-2xl ${darkTheme ? "text-white" : ""}`}>
        Validatos
      </h1>
    </a>
  );
}
