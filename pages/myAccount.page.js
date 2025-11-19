class MyAccountPage {
    constructor(page){
        this.page = page;
        this.logoutButton = page.getByRole('link', { name: ' Logout' });
    }

    async clickLogoutButton(){
        await this.logoutButton.click();
    }
}

module.exports = MyAccountPage