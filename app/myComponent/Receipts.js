"use client";
import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import totalState from "../atom/totalAtom";
import expensesState from "../atom/expensesAtom";
import { useRecoilState } from "recoil";

export default function Receipts() {
  const [receipts, setReceipts] = useState([]);
  const [total, setTotal] = useRecoilState(totalState);
  const [expenses, setExpenses] = useRecoilState(expensesState);
  const [activeMonth, setActiveMonth] = useState("September");
  const [receiptsOctober, setReceiptsOctober] = useState([]);
  const [receiptsSeptember, setReceiptsSeptember] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "transactions"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setReceipts(snapshot.docs);
      }
    );
    return unsubscribe;
  }, [db]);

  const totalAmount = receipts.reduce((acc, receipt) => {
    return acc + parseFloat(receipt.data().amount);
  }, 0);
  setExpenses(totalAmount.toFixed(2));

  const result = 4000 - expenses;
  setTotal(result.toFixed(2));

  const handleClick = (month) => {
    setActiveMonth(month);
  };

  useEffect(() => {
    let filteredReceipts = receipts.filter((receipt) => {
      let date = receipt.data().date; // Get the date from each receipt
      let year = date.slice(0, 4); // Extract the year
      let month = date.slice(5, 7); // Extract the month

      return year === "2024" && month === "10"; // Check if it's October 2024
    });

    let filteredReceiptsSeptember = receipts.filter((receipt) => {
      let date = receipt.data().date;
      let year = date.slice(0, 4);
      let month = date.slice(5, 7);

      return year === "2024" && month === "09"; // Check if it's September 2024
    });
    setReceiptsSeptember(filteredReceiptsSeptember);
    setReceiptsOctober(filteredReceipts); // Set the filtered receipts for October 2024
  }, [receipts]);

  return (
    <>
      <ul className="flex flex-col text-sm font-medium text-center text-gray-500 border-gray-200 dark:border-gray-700 dark:text-red-500">
        {["September", "October"].map((month) => (
          <li className="border" key={month}>
            <button
              className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${
                activeMonth === month
                  ? "bg-gray-50 dark:bg-gray-800 text-gray-600"
                  : ""
              }`}
              onClick={() => handleClick(month)}
            >
              <p className="truncate w-11"> {month} </p>
            </button>
          </li>
        ))}
      </ul>
      {activeMonth === "September" && (
        <div className="p-4 border border-black shadow-md rounded-md lg:w-[550px] space-y-3 h-72 scrollbar-none overflow-auto ">
          {receiptsSeptember.map((receipt) => (
            <div
              key={receipt.id}
              className="grid grid-cols-3 bg-blue-300 font-bold p-4 text-start
          rounded-md border-red-200 border shadow-md"
            >
              <h1>{receipt.data().transaction}</h1>
              <h1>{receipt.data().amount}</h1>
              <h1>{receipt.data().date}</h1>
            </div>
          ))}
          <h1 className="hidden">
            {4000} - {totalAmount} = {result}
          </h1>
        </div>
      )}

      {activeMonth === "October" && (
        <div className="p-4 border border-black shadow-smd rounded-md max-w-sm space-y-3 ">
          {receiptsOctober.map((receipt) => (
            <div
              key={receipt.id}
              className="grid grid-cols-3 bg-blue-300 font-bold 
          rounded-md border-red-200 border shadow-md text-start p-4"
            >
              <h1>{receipt.data().transaction}</h1>
              <h1>{receipt.data().amount}</h1>
              <h1>{receipt.data().date}</h1>
            </div>
          ))}

          <h1 className="hidden">
            {4000} - {totalAmount} = {result}
          </h1>
        </div>
      )}
    </>
  );
}
