"use client";

import { PlusCircleIcon } from "@heroicons/react/outline";
import { useRecoilState } from "recoil";
import modalState from "../atom/modalAtom";

export default function PlusIconAddIcon() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      <PlusCircleIcon
        className="h-6 text-blue-500 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out hidden md:inline-flex"
        onClick={() => setOpen(true)}
      />
    </div>
  );
}
