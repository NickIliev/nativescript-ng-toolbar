import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { FirstComponent } from "./pages/first.component";
import { SecondComponent } from "./pages/second.component";
import { ThirdComponent } from "./pages/third.component";
import { MainComponent } from "./pages/main.component";

const routes: Routes = [
    { path: "", redirectTo: "/main/(pagesOutlet:first-component)", pathMatch: "full" },
    { path: "main", component: MainComponent, children: [
        { path: "first-component", component: FirstComponent, outlet: "pagesOutlet" },
        { path: "second-component", component: SecondComponent, outlet: "pagesOutlet"  },
        { path: "third-component", component: ThirdComponent, outlet: "pagesOutlet"  }
    ] }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }