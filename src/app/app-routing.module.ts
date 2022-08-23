import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/about/components/about/about.component';
import { ContactComponent } from './features/contact/components/contact/contact.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { OurServicesComponent } from './features/our-services/components/our-services/our-services.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'nosso-servico', component: OurServicesComponent },
  { path: 'contato', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
