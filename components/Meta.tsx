export interface MetaProps {
  title: string;
  description: string;
  href: string;
  imageUrl?: string;
}

export default function Meta({
  title,
  description,
  imageUrl,
  href,
}: MetaProps) {
  const organizationSchema = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "Validatos",
    url: "https://www.validatos.io",
    sameAs: [],
  };
  const customScript = `
  // ===== wow js
  new WOW().init();

  // gTag
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ELXZX3W6EC');`;
  return (
    <>
      {/* HTML Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <link rel="canonical" href="https://www.validatos.io" />
      {imageUrl && <meta itemProp="image" content={imageUrl} />}

      {/* Facebook Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Validatos" />
      <meta property="og:locale" content="es" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {href && <meta property="og:url" content={href} />}
      {imageUrl && <meta property="og:image" content={imageUrl} />}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon/favicon-16x16.png"
      />

      <link rel="icon" type="image/x-icon" href="favicon/favicon.ico"></link>
      <link rel="manifest" href="favicon/site.webmanifest" />
      <link rel="stylesheet" href="css/animate.css" />
      <link rel="stylesheet" href="css/styles.css" />
      <link rel="stylesheet" href="css/ud-styles.css" />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
        integrity="sha512-Eak/29OTpb36LLo2r47IpVzPBLXnAMPAVypbSZiZ4Qkf8p/7S/XRG5xp7OKWPPYfJT6metI+IORkR5G8F900+g=="
        crossOrigin="anonymous"
        referrerpolicy="no-referrer"
      >
      </script>
      {/* <script src="js/main.js"></script> */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-ELXZX3W6EC"
      >
      </script>
      <script dangerouslySetInnerHTML={{ __html: customScript }} />
    </>
  );
}
