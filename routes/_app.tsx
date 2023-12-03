import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { SITE_DESCRIPTION, SITE_NAME } from "#/utils/constants.ts";
import Meta from "#/components/Meta.tsx";
import Navbar from "#/islands/NavBar.tsx";
import Footer from "#/components/Footer.tsx";

export default function App(props: PageProps) {
  return (
    <html lang="es">
      <Head>
        <Meta
          title={props.state?.title
            ? `${props.state.title} ▲ ${SITE_NAME}`
            : SITE_NAME}
          description={props.state?.description as string ?? SITE_DESCRIPTION}
          href={props.url.href}
        />
      </Head>
      <Navbar />
      <div class="mt-20 grow">
        <props.Component />
      </div>
      <Footer />
    </html>
  );
}
