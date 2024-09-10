import { atom } from "recoil";

const expensesState = atom({
  key: "ExpensesState",
  default: 0,
});

export default expensesState;
