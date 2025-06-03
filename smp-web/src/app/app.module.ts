import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { OurPartnerComponent } from './our-partner/our-partner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurElegantComponent } from './our-elegant/our-elegant.component';
import { WhoItsComponent } from './who-its/who-its.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WhyUsComponent,
    OurPartnerComponent,
    AboutUsComponent,
    OurElegantComponent,
    WhoItsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
