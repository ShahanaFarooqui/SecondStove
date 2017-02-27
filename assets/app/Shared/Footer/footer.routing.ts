import { Routes, RouterModule } from "@angular/router";

import { FaqComponent } from './faq.component';
import { AboutUsComponent } from './about-us.component';
import { ContactUsComponent } from './contact-us.component';
import { TermsNPrivacyComponent } from './terms-n-privacy.component';
import {ContactResponceComponent} from "./contact-responce";

const FOOTER_ROUTES: Routes = [
    { path: 'faq', component:FaqComponent},
    { path: 'aboutus', component: AboutUsComponent},
    { path: 'contactus', component: ContactUsComponent},
    { path: 'termsnprivacy', component: TermsNPrivacyComponent},
    { path: 'contactresponce/:id', component: ContactResponceComponent}
];

export const footerRouting = RouterModule.forChild(FOOTER_ROUTES);
