const urlPaths = require("../fixtures/urlPaths.json");

class RegisterPage{
    constructor(page) {
        this.page = page;
        this.firstNameField = page.getByRole('textbox', { name: 'First Name*' });
        this.lastNameField = page.getByRole('textbox', { name: 'Last Name*' });
        this.emailField = page.getByRole('textbox', { name: 'E-Mail*' });
        this.telephoneField = page.getByRole('textbox', { name: 'Telephone*' });
        this.passwordField = page.getByRole('textbox', { name: 'Password*' });
        this.passwordConfirmField = page.getByRole('textbox', { name: 'Password Confirm*' });
        this.subscribeNewsletterNo = page.getByText('No', { exact: true });
        this.subscribeNewsletterYes = page.getByText('Yes', { exact: true });
        this.privacyPolicyText = page.getByText('I have read and agree to the');
        this.continueButton = page.getByRole('button', { name: 'Continue' });
    }

    // Navigate to Register landing page
    async go(){
        await this.page.goto(urlPaths.account.register);
    }

    // Fill fields but do not subscribe, agree to privacy policy or click continue to allow for other tests
    async fillRegisterFields(firstName, lastName, email, phoneNumber, password){
        await this.fillFirstNameField(firstName);
        await this.fillLastNameField(lastName);
        await this.fillEmailField(email);
        await this.fillTelephoneField(phoneNumber);
        await this.fillPasswordField(password);
        await this.fillConfirmPasswordField(password);
    }

    async fillFirstNameField(firstName){
        await this.firstNameField.fill(firstName);
    }

    async fillLastNameField(lastName){
        await this.lastNameField.fill(lastName);
    }

    async fillEmailField(email){
        await this.emailField.fill(email);
    }

    // Country code required
    async fillTelephoneField(phoneNumber){
        await this.telephoneField.fill(phoneNumber);
    }

    async fillPasswordField(password){
        await this.passwordField.fill(password);
    }

    async fillConfirmPasswordField(password){
        await this.passwordConfirmField.fill(password);
    }

    async clickYesNewsletter(){
        await this.subscribeNewsletterYes.click();
    }

    async clickNoNewsletter(){
        await this.subscribeNewsletterNo.click();
    }

    async checkAgreePrivacyPolicy(){
        await this.privacyPolicyText.click();
    }

    async clickContinueButton(){
        await this.continueButton.click();
    }
}

module.exports = RegisterPage;