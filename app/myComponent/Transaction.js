"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import Receipts from "./Receipts";
import { useRecoilState } from "recoil";
import totalState from "../atom/totalAtom";
import expensesState from "../atom/expensesAtom";
import TotalBudget from "./TotalBudget";
import TotalExpenses from "./TotalExpenses";
import sideBarState from "../atom/sideBarAtom";

export default function Transaction() {
  const [sideBar, setSideBar] = useRecoilState(sideBarState);
  const [total] = useRecoilState(totalState);
  const [expenses] = useRecoilState(expensesState);
  const [transaction, setTransaction] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  async function addTransaction(e) {
    e.preventDefault();
    const transactionToSend = transaction;
    const amountToSend = parseFloat(amount).toFixed(2);
    const dateToSend = date;
    setTransaction("");
    setAmount("");
    setDate("");
    await addDoc(collection(db, "transactions"), {
      transaction: transactionToSend,
      amount: amountToSend,
      date: dateToSend,
      timestamp: serverTimestamp(),
    });
  }

  return (
    <div
      className={`flex flex-col mt-10 transition-transform duration-300 ease-out ${
        sideBar ? "translate-x-50" : "-translate-x-[45%] lg:-translate-x-[35%] "
      }`}
    >
      <div>
        <div className="max-w-6xl mx-4 xl:mx-auto flex flex-col p-4">
          <div className="flex space-y-4 shadow-sm border-b bg-white sticky top-0 z-50 ">
            <TotalBudget total={total} />
            <TotalExpenses expenses={expenses} />
          </div>
          <div className="flex p-2">
            <form className="flex flex-col w-full text-center">
              <input
                type="text"
                placeholder="Enter Transaction"
                className="border-none flex-1 focus:ring-0 focus:outline-none"
                value={transaction}
                onChange={(e) => setTransaction(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Amount"
                className="border-none flex-1 focus:ring-0 focus:outline-none"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <input
                type="date"
                placeholder="Enter Date"
                className="border-none flex-1 focus:ring-0 focus:outline-none"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 shadow-md hover:brightness-125 rounded-md w-40 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100 mt-5"
                onClick={addTransaction}
                disabled={!transaction || !amount || !date}
              >
                Add Transaction
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex max-w-full justify-center my-5">
        <Receipts />
      </div>
    </div>
  );
}
