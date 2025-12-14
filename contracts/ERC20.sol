//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzepplin/contracts/tokens/ERC20/ERC20.sol";

contract ERC20Token is ERC20 {
    constructor() ERC("@thestrawhats", "HAT"){
        _mint(msg.sender, 50000**18);
    }
}