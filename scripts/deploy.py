from brownie import accounts


def deploy_simpleCharity():
    # account = accounts[0]
    account = accounts.load("30d_challenge-acc")


def main():
    deploy_simpleCharity()
