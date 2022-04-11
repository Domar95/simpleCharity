from brownie import accounts, config, Charity, network
import time


def get_account():
    if network.show_active() == "development":
        return accounts[0]
    else:
        return accounts.add(config["wallets"]["private_key"])


def deploy_simpleCharity():
    account = get_account()

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
