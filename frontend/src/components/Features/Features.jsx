import React from "react";
import IconChat from "/img/icon-chat.webp";
import IconMoney from "/img/icon-money.webp";
import IconSecurity from "/img/icon-security.webp";

const Features = () => {
  const data = [
    {
      id: 1,
      img: IconChat,
      title: "You are our #1 priority",
      subtitle:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      id: 2,
      img: IconMoney,
      title: "More savings means higher rates",
      subtitle:
        "The more you save with us, the higher your interest rate will be!",
    },
    {
      id: 3,
      img: IconSecurity,
      title: "Security you can trust",
      subtitle:
        "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  const feat = data.map((item) => {
    return (
      <div key={item.id} className="Features__bloc">
        <img src={item.img} className="Features__img" />
        <h3 className="Features__title">{item.title}</h3>
        <p className="Features__subtitle">{item.subtitle}</p>
      </div>
    );
  });
  return (
    <>
      {/* <h2 className="Features__H2">Features</h2> */}
      <section className="Features">{feat}</section>
    </>
  );
};

export default Features;
