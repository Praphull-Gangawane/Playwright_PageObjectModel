exports.LoginPage= class LoginPage {

    constructor(page) {
        this.page = page
        this.username_textbox = page.getByLabel('Username')
        this.password_testbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: ' Login' })
    }

    // enterUN(){

    // }
    // enterPWD(){

    // }
    // clickonLogin(){
        
    // }
    async gotoLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }
    async login(un,pwd){
        await this.username_textbox.fill(un)
        await this.password_testbox.fill(pwd)
        await this.login_button.click()

    }
}