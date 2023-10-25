import Question from "@/islands/Question.tsx";

const questions = [
  {
    question: "¿Qué tipos de validaciones de datos ofrece Validatos?",
    answer:
      "Ofrecemos validaciones de identidad, como CURP e INE en México, Registraduría en Colombia, cédula de identidad en Chile, entre otros. Para ver una lista completa de las validaciones que ofrecemos, puedes hacer clic en este enlace.",
  },
  {
    question: "¿Cómo se integra Validatos con mis sistemas existentes?",
    answer:
      "Nuestras APIs siguen el estándar OpenAPI v3.1. Puedes probarlas en nuestro dashboard y copiar el código necesario para utilizarlas en los lenguajes de programación más utilizados, como JavaScript, Java, Python, etc.",
  },
  {
    question:
      "¿Qué diferencia a Validatos de otros servicios de validación de datos?",
    answer:
      "¡La diferencia radica en la calidad y el precio! El código de los servicios de Validatos sigue las mejores prácticas posibles para garantizar los tiempos de respuesta más rápidos y, gracias a ello, podemos ofrecer los precios más competitivos del mercado.",
  },
];

const questions2 = [
  {
    question: "¿Cómo funciona el plan gratuito de Validatos? ",
    answer:
      "Ofrecemos un número limitado de validaciones gratuitas para que puedas probar el servicio y comprobar las respuestas. Además, cada servicio ofrece la posibilidad de enviar datos de prueba, los cuales no se suman al total de llamadas y te servirán para probar tu integración.",
  },
  {
    question:
      "¿Qué medidas de seguridad implementa Validatos para proteger mis datos?",
    answer:
      "Validatos no requiere de ningún dato personal para ser utilizado. Además, la información obtenida a través de las llamadas de validación no se almacena en ninguna base de datos.",
  },
  {
    question: "Tengo un problema/consulta/duda, ¿cómo puedo obtener soporte?",
    answer:
      "En nuestro dashboard y en esta página, contamos con un mecanismo para enviar tickets de consulta. Si lo prefieres, puedes enviarnos un correo a contacto@validatos.io y nos pondremos en contacto contigo en un plazo máximo de 48 horas.",
  },
];

// 2 colums of questions are needed so that when opening 1 accordion the other one in the same row keeps it's hidden height

const FAQ = () => {
  return (
    <section id="faq" class="ud-faq">
      <div class="shape">
        <img src="images/faq/shape.svg" alt="shape" />
      </div>
      <div class="container mx-auto max-w-6xl">
        <div class="ud-section-title text-center mx-auto">
          <span>FAQ</span>
          <h2>Preguntas Frecuentes</h2>
          <p>
            También puedes mandar un mensaje si tienes alguna duda adicional.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="flex flex-col">
            {questions.map((q) => <Question {...q} />)}
          </div>
          <div class="flex flex-col">
            {questions2.map((q) => <Question {...q} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
