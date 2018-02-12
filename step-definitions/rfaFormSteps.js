
module.exports = function () {

    this.Then(/^I provide partner details in Partners and Advisor Component$/, function () {
        return page.rfaForm_page.expandPartnerAndAdvisorComponent().then(function () {
            return page.rfaForm_page.setPartner();
        })
    });

    this.Then(/^I provide advisor details in Partners and Advisor Component$/, function () {
        return page.rfaForm_page.setAdvisor().then(function () {
            return page.rfaForm_page.collapsePartnerAndAdvisorComponent();
        })
    });

    this.Then(/^I provide details in Savings and investments Component with (\d+) and (\d+) and (\d+)$/, function (balance, earning1, earning2) {
        return page.rfaForm_page.expandSavAndInvComponent().then(function () {
            return page.rfaForm_page.setSavAndInvDetails(balance, earning1, earning2);
        });
    })

    this.Then(/^I provide Earnings in Savings and investments Component with (\d+) and (\d+)$/, function (earning1, earning2) {
        return page.rfaForm_page.setEarnings(earning1, earning2);
    })

    this.Then(/^I provide Property in Savings and investments Component$/, function () {
        return page.rfaForm_page.setProperty().then(function () {
            return page.rfaForm_page.collapseSavAndInvComponent();
        });
    })

    this.Then(/^I provide details in Income and benefits Component$/, function () {
        return page.rfaForm_page.expandIncAndBeneComponent().then(function () {
            return page.rfaForm_page.setIncAndBeneDetails().then(function () {
                return page.rfaForm_page.collapseIncAndBeneComponent();
            })
        });
    })
}