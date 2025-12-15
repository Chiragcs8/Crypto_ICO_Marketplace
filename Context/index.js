import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  Children,
} from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import toast from "react-hot-toast";

//INTERNAL IMPORT
import {
  ERC20Generator,
  ERC20Generator_BYTECODE,
  handleetworkSwitch,
  shortenAddress,
  ICO_MARKETPLACE_ADDRESS,
  ICO_MARKETPLACE_CONTRACT,
  TOKEN_CONTRACT,
  PINATA_AIP_KEY,
  PINATA_SECRECT_KEY,
} from "./constants";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  //STATE VARIABLE
  const [address, setAddress] = useState();
  const [accountBalance, setAccountBalance] = useState(null);
  const [loader, setLoader] = useState(false);
  const [reCall, setReCall] = useState(0);
  const [currency, setCurrency] = useState("MATIC");

  //COMPONENT
  const [openBuyToken, setOpenBuyToken] = useState(false);
  const [openWidthdrawToken, setOpenWidthdrawToken] = useState(false);
  const [openTransferToken, setOpenTransferToken] = useState(false);
  const [openTokenCreator, setOpenTokenCreator] = useState(false);
  const [openCreateICO, setOpenCreateICO] = useState(false);

   

  return <StateContext.Provider value={{}}>{children}</StateContext.Provider>;
};
