import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./Shared/home.component";
import {StovesComponent} from "./Stove/stoves.component";
import {DishesComponent} from "./Dishes/dishes.component";
import {ChefsComponent} from "./Chef/chefs.component";
import {RecipesComponent} from "./Recipe/recipes.component";
import {ProfileUpdateComponent} from "./Shared/profile-update.component";
import { FooterHomeComponent } from "./Shared/Footer/footer.home";

const APP_ROUTES: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  { path:'home',component:HomeComponent},
  { path:'stoves',component:StovesComponent},
  { path:'dishes',component:DishesComponent},
  { path:'chefs',component:ChefsComponent},
  { path:'recipes',component:RecipesComponent},
  { path:'profileupdate',component:ProfileUpdateComponent},
  { path:'footer',component:FooterHomeComponent,loadChildren:'./Shared/Footer/footer.module#FooterModule'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
