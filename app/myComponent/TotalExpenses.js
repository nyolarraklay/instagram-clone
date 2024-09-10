import React from "react";

export default function TotalExpenses({ expenses }) {
  return (
    <div className="bg-blue-300 font-bold p-4 rounded-lg border-red-200 border shadow-md text-center space-y-4">
      <h1 className="font-bold text-lg">Total Expenses</h1>
      <p className="text-4xl"> {expenses} </p>
    </div>
  );
}
