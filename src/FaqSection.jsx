import React from "react";
import Faq from "./Faq";
import questions from "./data";

const FaqSection = () => {
  return (
    <div className="p-10">
      <div className="mb-3 text-3xl font-bold">
        React Frequently Asked Questions
      </div>
      <div className="flex flex-col">
        {questions.map((question) => (
          <Faq key={question.id} faq={question} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
