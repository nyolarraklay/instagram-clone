// components/ClientRootLayout.js
"use client";

import { RecoilRoot } from "recoil";

export default function ClientRootLayout({ children }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
