import { useState } from "react";
import Sidebar from "./Sidebar";
import TopbarNavigation from "./TopbarNavigation";

const Topbar = ({ topActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      {isOpen && <Sidebar setClose={setIsOpen} />}
      <img className="logo" src="./assets/shared/logo.svg" alt="logo" />
      <hr className="topLine" />
      <img
        className="hamburger"
        src="./assets/shared/icon-hamburger.svg"
        alt="icon-hamburger"
        onClick={() => setIsOpen(true)}
      />
      <TopbarNavigation activeOption={topActive} />
    </header>
  );
};

export default Topbar;
