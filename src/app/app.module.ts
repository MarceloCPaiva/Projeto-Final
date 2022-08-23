import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './features/about/about.module';
import { ContactModule } from './features/contact/contact.module';
import { HomeModule } from './features/home/home.module';
import { OurServicesModule } from './features/our-services/our-services.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    AboutModule,
    ContactModule,
    OurServicesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
