import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import HeaderPanel from "../../components/HeadPanel/HeaderPanel";
import Account from "../../components/Account/Account";

const Panel = () => {
  const data = [
    {
      id: 1,
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      id: 2,
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      id: 3,
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ];

  const accountsData = data.map((acc) => {
    return (
      <Account
        key={acc.id}
        title={acc.title}
        amount={acc.amount}
        description={acc.description}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <div className="Panel">
        <HeaderPanel />
        {accountsData}
      </div>
      <Footer />
    </div>
  );
};

export default Panel;
