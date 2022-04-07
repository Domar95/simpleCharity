// SPDX-License-Identifier: MIT

pragma solidity 0.8.13;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Charity is Ownable {
    struct Donates {
        address userAddress;
        uint256 amountDonated;
        string greetings;
    }

    Donates[] public donates;

    mapping(address => uint256) public addressToAmountDonated;

    function donate(string memory _greetings) public payable {
        donates.push(
            Donates({
                userAddress: msg.sender,
                amountDonated: msg.value,
                greetings: _greetings
            })
        );
        addressToAmountDonated[msg.sender] += msg.value;
    }

    function withdrawTo(address payable _to) public onlyOwner {
        _to.transfer(getBalance());
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
