import React from "react";
import "./Header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <section className="gpt3__header section__padding">
      {/* Header Content */}
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something Amazing With GPT3
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="gpt3__header-content__input">
          <input type="text" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      {/* Header Imgae*/}
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </section>
  );
};

export default Header;
