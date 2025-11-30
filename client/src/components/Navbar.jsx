import React, { useContext } from "react";

import logo from "../../images/logo.png";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

const Navbar = () => {
  const { currentAccount, connectWallet, disconnectWallet } =
    useContext(TransactionContext);

  return (
    <nav className="w-full flex justify-center items-center p-4">
      <h1 className="text-3xl font-bold text-white cursor-pointer">
        KryptoTransfer
      </h1>
    </nav>
  );
};

export default Navbar;
