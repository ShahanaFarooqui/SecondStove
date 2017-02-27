import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./Shared/home.component";
import { HeaderComponent } from "./Shared/header.component";
import {ProfileUpdateComponent} from "./Shared/profile-update.component";
import { StovesComponent } from "./Stove/stoves.component";
import {DishesComponent} from "./Dishes/dishes.component";
import {ChefsComponent} from "./Chef/chefs.component";
import {RecipesComponent} from "./Recipe/recipes.component";
import { FooterComponent } from "./Shared/footer.component";
import { FooterModule } from "./Shared/Footer/footer.module";
import {routing} from "./app.routing";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        StovesComponent,
        DishesComponent,
        ChefsComponent,
        RecipesComponent,
        ProfileUpdateComponent,
        FooterComponent
    ],
    imports: [BrowserModule,
    routing,
    FooterModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}