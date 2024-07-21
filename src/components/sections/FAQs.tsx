import React from "react";
import Container from "@/components/Container";
import Title from "@/components/Title";
import PlusIcon from "@/assets/icons/plus.svg";
import Accordion from "../Accordion";

const FrequentlyAskedQuestions = [
  {
    question: "How does the integration ecosystem work?",
    answer:
      "Our integration ecosystem connects with your favorite tools, consolidating all essentials in one place to boost productivity and streamline your workflow.",
  },
  {
    question: "How can I set and track goals?",
    answer:
      "Easily set and track goals by breaking them into tasks. Our app offers visual progress indicators and reminders to keep you on track.",
  },
  {
    question: "What measures ensure data security?",
    answer:
      "We use end-to-end encryption to protect your data, ensuring it remains secure and confidential both in transit and at rest.",
  },
  {
    question: "Can I customize the app features?",
    answer:
      "Yes, our app is highly customizable. You can tailor integration settings, goal tracking, and security preferences to fit your needs.",
  },
];

const FAQs = () => {
  return (
    <div className="bg-[linear-gradient(to_top,#05020A,#4C248A)] py-12 text-white">
      <Container>
        <Title>Frequently asked questions</Title>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-8">
          {FrequentlyAskedQuestions.map((faq) => (
            <Accordion
              question={faq.question}
              answer={faq.answer}
              key={faq.question}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FAQs;
