export class loginPage{
    constructor(page){
        this.page=page;
        this.user=page.getByPlaceholder('Username');
        this.pass=page.getByPlaceholder("Password");
        this.btn=page.getByRole('button',{name:"Login"});

    }
    async login(user,pass){
        await this.page.goto(process.env.BASE_URL);
        await this.user.fill(user);
        await this.pass.fill(pass);
        await this.btn.click();
    }
}