"use client";

import React from "react";
import PlusIcon from "@/assets/icons/plus.svg";
import MinusIcon from "@/assets/icons/minus.svg";

const Accordion = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div key={question} className="mt-8 flex flex-col gap-4 border-b pb-6 border-white/20">
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h3 className="flex-1 sm:text-md font-semibold">{question}</h3>
        {isOpen ? <MinusIcon/> : <PlusIcon />}
      </div>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};

export default Accordion;
