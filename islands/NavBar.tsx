import Logo from "#/components/Logo.tsx";
import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";

interface NavItemProps {
  label: string;
  href: string;
  class?: string;
  onClick?: () => void;
}

const NavItem = (props: NavItemProps) => {
  return (
    <li class={`nav-item ${props.class ?? ""}`}>
      <a class="ud-menu-scroll" href={props.href} onClick={props.onClick}>
        {props.label}
      </a>
    </li>
  );
};

interface NavBarProps {
  session?: string;
}

const Navbar = (props: NavBarProps) => {
  const headerNavItems = [
    {
      href: "/#",
      label: "Inicio",
      class: "active",
    },
    {
      href: "/#pricing",
      label: "Precios",
    },
    {
      href: "/#contact",
      label: "Contacto",
    },
    {
      href: "/docs",
      label: "Documentación",
    },
  ];

  const isCollapsed = useSignal(true);
  const isActive = useSignal(false);
  const isSticky = useSignal(false);

  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sticky = headerRef.current!.offsetTop;

      if (window.pageYOffset > sticky) {
        isSticky.value = true;
      } else {
        isSticky.value = false;
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    isCollapsed.value = !isCollapsed.value;
    isActive.value = !isActive.value;
  };

  const toggleOffMenu = () => {
    isCollapsed.value = true;
    isActive.value = false;
  };

  return (
    <header
      class={`ud-header sm:h-[97px] ${
        isSticky.value ? "sticky " : "bg-[#3056d3]"
      }`}
      ref={headerRef}
    >
      <div class="container mx-auto">
        <nav class="flex justify-space-between sm:justify-start items-center flex-row flex-wrap relative">
          <Logo darkTheme={!isSticky.value} />
          <div
            class={`navbar-collapse flex grow hidden sm:flex ${
              isCollapsed.value ? "" : "show"
            }`}
          >
            <ul id="nav" class="flex flex-col md:flex-row navbar-nav mx-auto">
              {headerNavItems.map((i) => (
                <NavItem {...i} onClick={toggleOffMenu} />
              ))}
              {(!isCollapsed.value) &&
                (
                  <NavItem
                    href="/account"
                    label="Ingresar"
                    onClick={toggleOffMenu}
                  />
                )}
            </ul>
          </div>

          {props.session
            ? <div>session - {props.session}</div>
            : (
              <div class="navbar-btn d-none d-sm-inline-block hidden sm:block ml-auto">
                <a class="ud-main-btn ud-white-btn" href="/account">
                  Ingresar
                </a>
              </div>
            )}

          <button
            class={`navbar-toggler ml-4 md:hidden ${
              isActive.value ? "active" : ""
            }`}
            aria-label="Menu toggler"
            onClick={toggleMenu}
          >
            <span class="toggler-icon"></span>
            <span class="toggler-icon"></span>
            <span class="toggler-icon"></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
