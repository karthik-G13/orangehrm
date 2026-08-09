import{Page} from "@playwright/test"

export class Swaglabs{
    constructor(private page:Page){
        this.username= this.page.getByPlaceholder("Username")
        this.password= this.page.getByPlaceholder("Password")
        this.btn= this.page.getByRole("button",{name:"Login"})
    }
    private username
    private password
    private btn

    async openpage(){
        await this.page.goto("https://www.saucedemo.com/")
    }
    async login(user:any,pass:any){
        await this.username.fill(user)
        await this.password.fill(pass)
        await this.btn.click()
    }

    
}