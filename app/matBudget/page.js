import React from "react";
import Transaction from "../myComponent/Transaction";
import ClientRootLayout from "../myComponent/ClientRootLayout";
import SideBar from "../myComponent/SideBar";

export default async function matBudget() {
  return (
    <div className="bg-gray-50 min-h-screen flex ">
      {/* <Header /> */}
      <ClientRootLayout>
        <SideBar />
        <Transaction />
      </ClientRootLayout>
    </div>
  );
}
