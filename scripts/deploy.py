from brownie import accounts, config, Charity
import time


def deploy_simpleCharity():
    chain = "ganache"
    if chain == "ganache":
        account = accounts[0]
    elif chain == "ropsten":
        account = accounts.add(config["wallets"]["private_key"])

    charity_contract = Charity.deploy({"from": account})
    time.sleep(1)
    charity_donate = charity_contract.donate(
        "test donation", {"from": account, "amount": 100000}
    )
    time.sleep(1)
    print(charity_donate)
    get_balance = charity_contract.getBalance()
    print(get_balance)


def main():
    deploy_simpleCharity()
