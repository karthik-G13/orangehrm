import {expect} from "@playwright/test";
export class dashboardPage{
    constructor(page){
        this.page=page;

    }
    async isDashboardVisible(){
        await expect(this.page.locator(".oxd-topbar-header-title")).toBeVisible();

    }
}