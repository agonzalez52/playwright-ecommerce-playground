class LoginPage {
    constructor(page){
        this.page = page;
        this.emailField = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.passwordField = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async fillEmailField(email){
        await this.emailField.fill(email);
    }

    async fillPasswordField(password){
        await this.passwordField.fill(password);
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }
}

module.exports = LoginPage;