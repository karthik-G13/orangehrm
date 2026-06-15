import {test,expect} from "../fixtures/orangeHRM";



test('fixture',async({loggedInPage,dashboard})=>{
    await loggedInPage.login(process.env.Username,process.env.Password);
    await dashboard.isDashboardVisible();
})