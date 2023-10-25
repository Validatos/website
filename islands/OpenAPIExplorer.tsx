// @ts-nocheck: use of openapi-explorer element is not typed, but valid
import { Head } from "$fresh/runtime.ts";

const OpenAPIExplorer = () => {
  return (
    <>
      <Head>
        <title>Validatos Documentación</title>
        <script
          type="module"
          src="https://unpkg.com/openapi-explorer@1.1.578/dist/browser/openapi-explorer.min.js"
        >
        </script>
      </Head>
      <openapi-explorer spec-url="openapi/validatos.yaml">
      </openapi-explorer>
    </>
  );
};

export default OpenAPIExplorer;
