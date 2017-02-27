import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";

import { FaqComponent } from './faq.component';
import { AboutUsComponent } from './about-us.component';
import { ContactUsComponent } from './contact-us.component';
import { TermsNPrivacyComponent } from './terms-n-privacy.component';
import {ContactResponceComponent} from "./contact-responce";
import {footerRouting} from "./footer.routing";
import {SearchComponent} from '../search.component';
import {FooterHomeComponent} from "./footer.home";

@NgModule({
  declarations: [
    FaqComponent,
    AboutUsComponent,
    ContactUsComponent,
    TermsNPrivacyComponent,
    ContactResponceComponent,
    SearchComponent,
    FooterHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    footerRouting
  ]
})
export class FooterModule { }
