import NotFound from "#/components/NotFound.tsx";

interface DogeResponse {
  message: string;
}

export default async function NotFoundPage() {
  const resp = await fetch(
    "https://dog.ceo/api/breeds/image/random",
  );

  if (!resp.ok) {
    return <NotFound img="/images/404/engineer-doge.jpg" />;
  }

  const { message: img } = (await resp.json()) as DogeResponse;

  return <NotFound img={img} />;
}
