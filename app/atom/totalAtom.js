import { atom } from "recoil";

const totalState = atom({
  key: "TotalState",
  default: 0,
});

export default totalState;
