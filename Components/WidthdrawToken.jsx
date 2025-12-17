import React, { useState, useEffect } from "react";

//INTERNAL IMPORT
import Input from "./Input";
import Button from "./Button";

const WidthdrawToken = ({
  address,
  widthdrawToken,
  connectWallet,
  setOpenWidthdrawToken,
}) => {
  const [widthdrawQuentity, setWidthdrawQuentity] = useState({
    token: "",
    amount: "",
  });
  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={() => setOpenWidthdrawToken(false)} className="close">
          &times;
        </span>
        <h2>Widthdraw Token</h2>
        <div
          className="input-Container"
          style={{
            marginTop: "1rem",
          }}
        >
          <Input
            placeholder={"Token Address"}
            handleChange={(e) =>
              setWidthdrawQuentity({
                ...widthdrawQuentity,
                token: e.target.value,
              })
            }
          />
          <Input
            placeholder={"Quentity"}
            handleChange={(e) =>
              setWidthdrawQuentity({
                ...widthdrawQuentity,
                amount: e.target.value,
              })
            }
          />
          
        </div>
        <div
          className="button-box"
          style={{
            marginTop: "1rem",
          }}
        >
          {address ? (
            <Button
              name="Widthdraw Token"
              handleClick={() => widthdrawToken(widthdrawQuentity)}
            />
          ) : (
            <Button name="Connect Wallet" handleClick={() => connectWallet()} />
          )}
        </div>
      </div>
    </div>
  );
};

export default WidthdrawToken;
