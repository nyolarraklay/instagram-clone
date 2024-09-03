import { atom } from "recoil";

const modalState = atom({
  key: "ModalState",
  default: false,
});

export default modalState;
