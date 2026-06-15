import {test as base,expect} from "@playwright/test";
import { loginPage } from "../basepages/loginPage";
import { dashboardPage } from "../basepages/dashboardpage";
 
export const test=base.extend({
    loggedInPage:async({page},use)=>{
        await use(new loginPage(page));
    },
    
        dashboard:async({page},use)=>{
            await use(new dashboardPage(page));
        }
    
});
export {expect} from "@playwright/test";
