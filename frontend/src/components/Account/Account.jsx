import React from "react";

const Account = (props) => {
  return (
    <section className="account">
      <div className="account__content__wrapper">
        <h3 className="account__title">{props.title}</h3>
        <p className="account__amount">{props.amount}</p>
        <p className="account__amount__description">{props.description}</p>
      </div>
      <div className="account__content__wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default Account;
