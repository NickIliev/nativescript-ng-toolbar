import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { FirstComponent } from "./pages/first.component";
import { SecondComponent } from "./pages/second.component";
import { ThirdComponent } from "./pages/third.component";
import { MainComponent } from "./pages/main.component";

const routes: Routes = [
    { path: "", redirectTo: "/main/(pagesOutlet:first)", pathMatch: "full" },
    { path: "main", component: MainComponent, children: [
        { path: "first", component: FirstComponent, outlet: "pagesOutlet" },
        { path: "second", component: SecondComponent, outlet: "pagesOutlet"  },
        { path: "third", component: ThirdComponent, outlet: "pagesOutlet"  }
    ] }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }