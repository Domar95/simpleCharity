from brownie import accounts, config, Charity, network
import time
import os, shutil


def get_account():
    if network.show_active() == "development":
        return accounts[0]
    else:
        return accounts.add(config["wallets"]["private_key"])


def deploy_simpleCharity():
    account = get_account()

    charity_contract = Charity.deploy({"from": account})
    time.sleep(1)
    return charity_contract


def update_front_end():
    copy_folder_to_front_end("./build", "./simple_charity_react/src/chain-info")


def copy_folder_to_front_end(source, destination):
    # sending build folder with contract address
    if os.path.exists(destination):
        shutil.rmtree(destination)
    shutil.copytree(source, destination)


def main():
    deploy_simpleCharity()
