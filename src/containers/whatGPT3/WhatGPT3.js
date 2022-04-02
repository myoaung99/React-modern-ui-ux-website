import React from "react";
import { Feature } from "../../components";
import "./WhatGPT3.css";

const features = [
  {
    title: "What is GPT-3",
    text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.",
  },
  {
    title: "Chatbots",
    text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
  },
  {
    title: "Knowledgebase",
    text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
  },
  {
    title: "Education",
    text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
  },
];

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin">
      <div className="gpt3__whatgpt3-feature">
        <Feature title={features[0].title} text={features[0].text} />
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the libirary</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature title={features[1].title} text={features[1].text} />
        <Feature title={features[2].title} text={features[2].text} />
        <Feature title={features[3].title} text={features[3].text} />
      </div>
    </div>
  );
};

export default WhatGPT3;
