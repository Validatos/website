import { useSignal } from "@preact/signals";
import IconChevronDown from "$tabler_icons/tsx/chevron-down.tsx";

interface QuestionProps {
  question: string;
  answer: string;
}
const Question = ({ question, answer }: QuestionProps) => {
  const collapsed = useSignal(true);
  return (
    <div class="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
      <div class="accordion z-10">
        <button
          class="ud-faq-btn collapsed"
          onClick={() => (collapsed.value = !collapsed.value)}
        >
          <span
            class={`icon flex-shrink-0 transition-transform duration-300 ease-in-out ${
              collapsed.value ? "" : "rotate-180"
            }`}
          >
            <IconChevronDown class="w-8 h-8" />
          </span>
          <span>{question}</span>
        </button>
        <div
          class={`accordion-collapse ${
            collapsed.value ? "max-h-0 overflow-hidden" : "max-h-[1000px]"
          } ease-in-out duration-500 transition-max-height`}
        >
          <div class="ud-faq-body">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
