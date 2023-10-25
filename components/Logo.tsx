export default function Logo({ darkTheme = true }) {
  return (
    <a class="my-navbar flex flex-row items-center py-2" href="/#">
      <img
        class="h-20 mr-4 lg:h-24"
        src={darkTheme
          ? "images/logo/logo.png"
          : "images/logo/logo_transparent.png"}
        alt="Logo"
      />
      <h1
        class={`text-2xl lg:text-4xl ${darkTheme ? "text-white" : ""}`}
      >
        Validatos
      </h1>
    </a>
  );
}
