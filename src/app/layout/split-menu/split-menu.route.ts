import { Route } from "@angular/router";
import { SplitMenuPage } from "./split-menu.page";

export const split_menu_route:Route = {
    path: '',
    component:SplitMenuPage,
    outlet:'split-menu'
}