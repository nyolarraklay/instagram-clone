import { atom } from "recoil";

const sideBarState = atom({
  key: "SideBarState",
  default: true,
});

export default sideBarState;
