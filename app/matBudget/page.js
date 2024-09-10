import React from "react";
import Transaction from "../myComponent/Transaction";
import ClientRootLayout from "../myComponent/ClientRootLayout";

export default async function matBudget() {
  return (
    <div className="bg-gray-50 min-h-screen ">
      {/* <Header /> */}
      <ClientRootLayout>
        <Transaction />
      </ClientRootLayout>
    </div>
  );
}
