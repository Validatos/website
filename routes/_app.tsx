// Copyright 2023 the Deno authors. All rights reserved. MIT license.
import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { SITE_DESCRIPTION, SITE_NAME } from "#/utils/constants.ts";
import Meta from "#/components/Meta.tsx";
import Navbar from "#/islands/NavBar.tsx";
import Footer from "#/components/Footer.tsx";

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <Meta
          title={props.data?.title
            ? `${props.data.title} ▲ ${SITE_NAME}`
            : SITE_NAME}
          description={props.data?.description ?? SITE_DESCRIPTION}
          href={props.url.href}
        />
      </Head>
      <Navbar />
      <div class="mt-20 sm:mt-24 grow">
        <props.Component />
      </div>
      <Footer />
    </>
  );
}
