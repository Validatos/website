import { ErrorPageProps } from "$fresh/server.ts";

export default function Error500Page(props: ErrorPageProps) {
  return (
    <main class="flex flex-col justify-center p-4 text-center space-y-4">
      <h1 class="text-4xl inline-block font-bold">Error de Servidor</h1>
      <p>500 internal error: {(props.error as Error).message}</p>
      <p class="text-xl text-blue-900">
        <a href="/">Volver al sitio</a>
      </p>
    </main>
  );
}
