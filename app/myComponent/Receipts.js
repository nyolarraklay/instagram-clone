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

  return (
    <div className="p-4 border border-black shadow-smd rounded-md max-w-sm space-y-3">
      {receipts.map((receipt) => (
        <div
          key={receipt.id}
          className="flex items-center p-4 justify-between bg-blue-300 font-bold 
          rounded-md border-red-200 border shadow-md text-center"
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
  );
}
