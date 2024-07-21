"use client";

import React from "react";
import PlusIcon from "@/assets/icons/plus.svg";
import MinusIcon from "@/assets/icons/minus.svg";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div key={question} className="flex flex-col border-b border-white/20 pb-6">
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h3 className="flex-1 font-semibold sm:text-md">{question}</h3>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: "0" }}
            animate={{ opacity: 1, height: "auto", marginTop: '16px' }}
            exit={{ opacity: 0, height: 0, marginTop: "0" }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
