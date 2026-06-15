// src/app/(routes)/layout.js
import Navbar from "@/components/Navbar/navbar";

export default function RoutesLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
