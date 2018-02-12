module.exports = {

    elements: {
        formsList: by.css('[class="table table-hover"] tbody'),
        NameRow: by.css('tr'),
        Name: by.css('td'),
        subjectInPill: by.css('.col-sm-11 div.col-sm-11 .selectize-input.items.not-full.has-options.has-items > span'),
    },

    checkForm: function (compStr, formName) {
        // console.log("compStr: ", compStr);
        driver.sleep(3000);
        return helpers.gridGetForm(page.forms_page.elements.formsList, page.forms_page.elements.NameRow, page.forms_page.elements.Name, compStr, formName).then(function (form) {
            return expect(form).to.contain(formName);
        })
    },

    clickForm: function (compStr, formName) {
        driver.sleep(5000)
        return driver.wait(until.elementsLocated(page.forms_page.elements.NameRow), 10000)
            .then(function () {
                helpers.gridGetClickForm(page.forms_page.elements.formsList, page.forms_page.elements.NameRow, page.forms_page.elements.Name, compStr, formName);
                return driver.sleep(3000);
                //return driver.wait(until.elementsLocated(page.forms_page.elements.subjectInPill), 15000);
            })
    },
}
